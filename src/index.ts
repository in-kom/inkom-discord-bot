import { Client, Collection } from "discord.js";
import { inkomClientOptions } from "./config/clientOptions.js";
import { ExtendedClient } from "types/client.js";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { initializeBotComponents } from "handlers/init.js";
dotenv.config();

const bot = new Client(inkomClientOptions) as ExtendedClient;
bot.commands = new Collection();

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URI, { family: 4 })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect MongoDB: ", err));

initializeBotComponents(bot);

bot.login(process.env.DISCORD_TOKEN);
