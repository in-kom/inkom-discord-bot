import { Client, Collection } from "discord.js";

interface ExtendedClient extends Client {
  commands: Collection<string, any>;
  authToken?: string;
}
