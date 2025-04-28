declare namespace NodeJS {
  /**
   * Add more context to the environment variables of the NodeJS Process
   */
  export interface ProcessEnv {
    /**
     * Discord Application token to log in into the Discord API
     */
    DISCORD_TOKEN: string;
    /**
     * MongoDB connection string to connect to the database
     */
    MONGODB_URI: string;
    /**
     * The client ID of the Discord application
     */
    CLIENT_ID: string;
    /**
     * The to-do app API URL
     */
    TODOAPP_API_URL: string;
    /**
     * The to-do app e-mail address
     */
    TODOAPP_EMAIL: string;
    /**
     * The to-do app e-mail password
     */
    TODOAPP_PASSWORD: string;
  }
}
