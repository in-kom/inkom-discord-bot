import axios from "axios";
import { ExtendedClient } from "types/client.js";

export async function fetchData(client: ExtendedClient, endpoint: string) {
  try {
    const response = await axios.get(
      `${process.env.TODOAPP_API_URL}${endpoint}`,
      {
        headers: { Authorization: `Bearer ${client.authToken}` },
      }
    );
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch data from ${endpoint}:`, error.message);
    return null;
  }
}
