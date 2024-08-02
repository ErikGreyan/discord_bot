import { Client, GatewayIntentBits } from "discord.js";
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const token = process.env.DISCORD_TOEKN;

client.once("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", message => {
    if (message.author.bot) return;

    if (message.content === "!hello") {
        message.channel.send("Hello, world!");
    }

    if (message.content.toLowerCase() === "ping") {
        message.reply("Pong!");
    }

    if (message.content.includes("Discord")) {
        message.channel.send("Did someone mention Discord? 😊");
    }
});

client.login(token);