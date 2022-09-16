const { SlashCommandBuilder } = require('discord.js');
const { default: axios } = require('axios');
const { valorantAPI } = require('vandal.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('competitive')
		.setDescription('Returns your valorant Rank')
	/* .addStringOption(option => 
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
		)
    .addStringOption(option =>
        option
            .setName('region')
            .setDescription('region')
            .setRequired(true)
        ), */
	,
	async execute(interaction) {
		const retrieveUser = await valorantAPI.fetchUser('BlueOrcaZ','007');
		console.log('user');






		/* const user = interaction.options.get('username').value;
		const tag = interaction.options.get('tag').value;
        const region = interaction.options.get('region').value;

		axios.get(`https://api.henrikdev.xyz/valorant/v1/mmr/${region}/${user}/${tag}`)
			.then(function (response) {
				const { EmbedBuilder } = require('discord.js');
				const Embed = new EmbedBuilder()
					.setColor(0x0099FF)
					.setTitle("Valorant Competitive Stats")
					.setAuthor({ name: 'Valorant Tracker#9955'})
					.setDescription(`Valorant Details for ${user}`)
					.setThumbnail(response.data.data.images.large)
					.addFields(
						{ name: 'Current Rank:', value: `${response.data.data.currenttierpatched}`},
						
					)
					interaction.reply({ embeds: [Embed]});
					return response;
					
						
			})
			.catch(function (error) {
				console.log(error);
			}); */
	}, 
}