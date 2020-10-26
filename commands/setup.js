const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {
const embed = new MessageEmbed()
.setAuthor('Setup', 'https://raw.githubusercontent.com/kasimakr/DiscordBot32312514/master/assets/Akrr.png', 'https://discord.gg/KPRR8hE')
.setColor('#f7f7f7')
.addField('**Intro**', 'Welcome! Thanks for adding me, Im **Kasim Akr** and I can do alot of commands!', 'https://discord.gg/KPRR8hE')
.addField('**Prefix**', 'My prefix is  ``;``', 'https://discord.gg/KPRR8hE')
.addField('**Permissions**', 'To ensure the bot can do all the moderation and music commands please ensure we have the permissions', 'https://discord.gg/KPRR8hE')
.addField('*Mandatory Permissions*', 'Mandatory permissions required for the bot: Administrator(To See All The Channels And To Create Channels When Needed), Kick Members (To Kick), Ban Members (To Ban), Read Text Channels & See Voice Channels (Channel Counts.), Manage Messages (To Edit Messages), Send Messages(Send Messages Lmao), Attach Files(Rank Card), Embed Links(Fancy Replies), Use External Emojis (For The Yes Or No Reactions), Add Reactions,', 'https://discord.gg/KPRR8hE')
.addField('*Permissions For Music*', 'Permissions required for music: Connect, Speak, Mute Members, Deafen Members, Move Members. ', 'https://discord.gg/KPRR8hE')
.addField('*Permissions For Moderation And Fun*', 'Permissions required for moderation: ', 'https://discord.gg/KPRR8hE')
.addField('**Channels**', 'Channels required for moderation, etc, reports(Text Channel For All Reports), Logs(Any Messages Deleted, Etc) ', 'https://discord.gg/KPRR8hE')
.addField('**Done!**', 'Congradulations! You just added a beautiful looking bot along with amazing music! If you have any problems, typos, etc dont hesitate to tell us! Click the setup button on the top of this embed to join our support server!', 'https://discord.gg/KPRR8hE')

.setTimestamp()
.setFooter("Version: 1.0.5")
message.channel.send(embed)
};

module.exports.help = {
  name: "setup"
};
