import { Client } from "discord.js";
import { inkomClientOptions } from "config/clientOptions";
import express from "express";
import { readFileSync } from "fs";
import path from "path";

import * as dotenv from "dotenv";
dotenv.config();

const app = express();

const bot = new Client(inkomClientOptions);

bot.login(process.env.DISCORD_TOKEN).then(() => {
  console.log("Discord bot online");
});

app.get("/", (req, res) => {
  try {
    const htmlFile = readFileSync(
      path.join(process.cwd(), "index.html"),
      "utf8"
    );
    res.setHeader("Content-Type", "text/html");
    res.send(htmlFile);
  } catch (error) {
    console.error("Error serving index.html:", error);
    res.status(500).send("Error loading page");
  }
});

app.listen(3000);

console.log("Administration panel running on http://localhost:3000");
