const fs = require('node:fs');
const path = require('node:path');
const { GatewayIntentBits, Client, Collection } = require("discord.js");
const { token } = require('dotenv').config();

const client = new Client({intents: [GatewayIntentBits.Guilds]});

client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	client.commands.set(command.data.name, command);
}


client.once('ready', () => {
    console.log("Ready!");
});

client.on('interactionCreate', async interaction => {
	
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);



	if (!command) return; // if a command is detected then it executes the command
	try {
		await command.execute(interaction); // executes command
	} catch (error) {
		console.error(error);
		const { MessageEmbed } = require('discord.js');
		const Embed = new MessageEmbed()
		.setColor("RANDOM")
		.setTitle("Error")
		.setDescription("There was an Error exceuting this Command! Please make sure that your account details are set to public and/or you didn't mistype!")
		.setTimestamp()
		await interaction.reply({ embeds: [Embed] });

		// await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true }); // logs an error 
	}
});


client.login(process.env.DISCORD_TOKEN);