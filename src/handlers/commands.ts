import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "url";
import { ExtendedClient } from "../types/client.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function loadCommands(client: ExtendedClient) {
  const foldersPath = path.join(__dirname, "..", "commands");
  const commandFolders = fs.readdirSync(foldersPath);

  for (const folder of commandFolders) {
    const commandsPath = path.join(foldersPath, folder);
    const commandFiles = fs
      .readdirSync(commandsPath)
      .filter((file) => file.endsWith(".ts"));

    for (const file of commandFiles) {
      const filePath = path.join(commandsPath, file);
      const fileUrl = `file://${filePath}`;

      try {
        const command = await import(fileUrl);

        // Set a new item in the Collection with the key as the command name and the value as the exported module
        if (command.data && command.data.name) {
          client.commands.set(command.data.name, command);
        } else {
          console.log(
            `[WARNING] The command at ${filePath} is missing a required "data" or "data.name" property.`
          );
        }
      } catch (error) {
        console.error(`Error loading command at ${filePath}:`, error);
      }
    }
  }
}
