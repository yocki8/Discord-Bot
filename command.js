const { REST, Routes } = require("discord.js");

const commands = [
    {
        name: "ping",
        description: "Replies with Pong!",
    },
];

const rest = new REST({ version: "10" }).setToken(
    "MTIyNDY4NDgyMDcwMTkwNDk5Nw.Gbvm1a.yZ83fPYSez33L5YSez-nAVKoD7P-FLEtawqdqw"
); // I know i exposed my bot token 😁

(async ()=>{
try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands('1224684820701904997'), { body: commands });

    console.log("Successfully reloaded application (/) commands.");
} catch (error) {
    console.error(error);
}})();
