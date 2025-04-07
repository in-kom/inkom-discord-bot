import { Events } from "discord.js";
import { ExtendedClient } from "types/client.js";

module.exports = {
  name: Events.ClientReady,
  once: false,
  execute(client: ExtendedClient) {
    console.log(`Ready! Logged in as ${client.user.tag}`);
  },
};
