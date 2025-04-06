import { ClientOptions, IntentsBitField, PresenceUpdateStatus, MessageMentionOptions, PresenceStatusData } from "discord.js";

export const inkomClientOptions : ClientOptions = {
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.GuildMessagePolls,
        IntentsBitField.Flags.GuildMessageReactions,
        IntentsBitField.Flags.GuildMessageTyping
    ],
    presence: {
        status: PresenceUpdateStatus.Online,
        
    },
    closeTimeout: 60000,
}