const Discord = require("discord.js");

module.exports = {
  name: "say",
    run: async (bot, message, args) => {

    if(!message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])) return message.channel.send("You can not use this command!")
    
    let argsresult;
    let mChannel = message.mentions.channels.first()

    message.delete()
    if(mChannel) {
        argsresult = args.slice(1).join(" ")
          var Embed = new Discord.MessageEmbed()
          
    .setAuthor(message.guild.name,message.guild.iconURL)
    .setDescription(argsresult);
        mChannel.send(Embed)
    } else {
        argsresult = args.join(" ")
          var Embed = new Discord.MessageEmbed()
        .setAuthor("Kasim Akr Speaks", "https://raw.githubusercontent.com/kasimakr/DiscordBot32312514/master/assets/Akrr.png")
        .setDescription(argsresult)
        .setFooter(`Spoken By: ${message.author.tag}`, `${message.author.displayAvatarURL()}`)
        .setTimestamp()
        .setColor('#f7f7f7');
        message.channel.send(Embed)
    }

    }

}

module.exports.help = {
    name: "say"
};
