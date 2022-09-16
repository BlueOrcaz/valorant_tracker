const { SlashCommandBuilder } = require('discord.js');
const { default: axios } = require('axios');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('account')
		.setDescription('Returns your Valorant username, tag, region, and playercard')
	.addStringOption(option => 
		option
			.setName('username')
			.setDescription('Valorant Username')
			.setRequired(true)
		)
	.addStringOption(option =>
		option
			.setName('tag')
			.setDescription('put your tag in here')
			.setRequired(true)
		),
	async execute(interaction) {
		const user = interaction.options.get('username').value;
		const tag = interaction.options.get('tag').value;

		axios.get(`https://api.henrikdev.xyz/valorant/v1/account/${user}/${tag}`)
			.then(function (response) {
				const { EmbedBuilder } = require('discord.js');
				const Embed = new EmbedBuilder()
					.setColor(0x0099FF)
					.setTitle("Valorant User Details")
					.setAuthor({ name: 'Valorant Tracker#9955'})
					.setDescription(`Valorant User Details for ${response.data.data.name}`)
					.setThumbnail(response.data.data.card.small)
					.addFields(
						{ name: 'Username:', value: `${response.data.data.name}` + '#' + `${response.data.data.tag}`},
						{ name: 'Region:', value: `${response.data.data.region.toUpperCase()}`},
						{ name: 'Account Level:', value: `${response.data.data.account_level}`}
						
					)
					interaction.reply({ embeds: [Embed]});
					return response;
					
						
			})
			.catch(function (error) {
				console.log(error);
			});
	},
};