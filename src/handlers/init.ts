import { ExtendedClient } from "types/client.js";
import { loadCommands } from "./commands.js";
import { loadEvents } from "./events.js";

export async function initializeBotComponents(client: ExtendedClient) {
  await loadCommands(client);
  loadEvents(client);
}
