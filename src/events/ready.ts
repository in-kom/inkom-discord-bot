import { Events } from "discord.js";
import { fetchData } from "handlers/todoapp.js";
import { ExtendedClient } from "types/client.js";

module.exports = {
  name: Events.ClientReady,
  once: false,
  async execute(client: ExtendedClient) {
    console.log(`Ready! Logged in as ${client.user.tag}`);

    const projects = await fetchData(client, '/projects/company/0fcb5064-c40c-40ee-a5b6-16ef72a9385e');
    if (projects && projects.length > 0) {
      const tasks = await fetchData(client, `/tasks/project/${projects[0].id}`);
      console.log(`Found ${tasks.length} tasks in project ${projects[0].name}`);
    }
  },
};
