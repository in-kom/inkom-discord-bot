import fs from "node:fs";
import path from "node:path";
import { ExtendedClient } from "types/client.js";
import { fileURLToPath } from "url";

export async function loadEvents(client: ExtendedClient) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const eventsPath = path.join(__dirname, "..", "events");
  const eventFiles = fs
    .readdirSync(eventsPath)
    .filter((file) => file.endsWith(".ts"));

  for (const file of eventFiles) {
    const filePath = path.join(eventsPath, file);
    const fileUrl = `file://${filePath}`;

    try {
      const importedModule = await import(fileUrl);
      // Extract the event from default export (CommonJS modules)
      const event = importedModule.default;

      if (!event) {
        console.error(`Event module at ${filePath} has no default export.`);
        continue;
      }
      
      console.log(`Loading event: ${event.name}, once: ${!!event.once}`);
      
      if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
      } else {
        client.on(event.name, (...args) => event.execute(...args));
      }
    } catch (error) {
      console.error(`Error loading event located at ${filePath}`, error);
    }
  }
}
