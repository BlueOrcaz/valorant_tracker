const { GatewayIntentBits, Client } = require("discord.js");
const { token } = require('dotenv').config();

const client = new Client({intents: [GatewayIntentBits.Guilds]});

client.once('ready', () => {
    console.log("Ready");
});

client.login(process.env.DISCORD_TOKEN);