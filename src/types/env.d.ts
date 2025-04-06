declare namespace NodeJS {
  /**
   * Add more context to the environment variables of the NodeJS Process
   */
  export interface ProcessEnv {
    /**
     * Discord Application token to log in into the Discord API
     */
    DISCORD_TOKEN: string;
  }
}
