import { ExtendedClient } from "types/client.js";
import { loadCommands } from "./commands.js";
import { loadEvents } from "./events.js";
import axios from "axios";

export async function initializeBotComponents(client: ExtendedClient) {
  await loadCommands(client);
  loadEvents(client);

  connectToTodoApp(client)
    .then((isConnected) => {
      if (isConnected) {
        console.log("Connected to TodoApp API");
      } else {
        console.error("Failed to connect to TodoApp API");
      }
    })
    .catch((error) => {
      console.error("Error during TodoApp connection:", error);
    });
}

async function connectToTodoApp(client: ExtendedClient) {
  try {
    const response = await axios.post(
      `${process.env.TODOAPP_API_URL}/auth/login`,
      {
        email: process.env.TODOAPP_EMAIL,
        password: process.env.TODOAPP_PASSWORD,
      }
    );
    client.authToken = response.data.token;
    console.log("Successfully authenticated");
    return true;
  } catch (error) {
    console.error("Authentication failed:", error.message);
    return false;
  }
}
