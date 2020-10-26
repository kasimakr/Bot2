const { MessageEmbed } = require('discord.js');    


module.exports = {
 run: async (bot, message, args) => {
const embed = new MessageEmbed()
.setTitle('Server Information')
.setAuthor(`${message.guild.name}`, 'https://raw.githubusercontent.com/kasimakr/DiscordBot32312514/master/assets/Akrr.png')
.setThumbnail(message.guild.iconURL())
.setColor(`BLUE`)
.addField(`Server Name:`, `${message.guild.name}`)
.addField('Owner:',  `<@!${message.guild.owner.user.id}>`)    
.addField(`Total Members:`, `${message.guild.memberCount}`)
.addField(`Total Server Boosts:`, `${message.guild.premiumSubscriptionCount}`)
.addField(`Verification Level:`, `${message.guild.verificationLevel}`)
.addField(`Server Reigon:`, `${message.guild.region}`)
.setTimestamp()
.setFooter("Start a support ticket if you have any issues!")
message.channel.send(embed)
}
}

module.exports.help = {
  name: "serverdetails"
};
