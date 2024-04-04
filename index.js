const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

client.on("messageCreate", (message) => {
    if (message.author.bot) return;

    console.log(message.content);
    const user = message.author.globalName;
    message.reply("Hello " + user);
});

client.on("interactionCreate", async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === "ping") {
        await interaction.reply("Pong!");
    }
});

client.login("MTIyNDY4NDgyMDcwMTkwNDk5Nw.Gbvm1a.yZ83fPYSez33L5YSez-nAVKoD7P-FLEtawqdqw");
