const Discord = require("discord.js");
const canvacord = require('canvacord')
// do npm i canvacord

module.exports = {
    name: "quote",
    callback: async (message, arguments, text, client) => {
        if (message.author.bot === false) {
            let user =
                message.mentions.members.first() ||
                message.guild.members.cache.get(arguments[1]) ||
                message.member ||
                message.author;


            if (!message.mentions.members.first()) {
                let avatar = user.user.displayAvatarURL({ dynamic: false, format: 'png' });
                let image1 = await canvacord.Canvas.quote({ image: avatar, message: text, username: user.user.username });
                let attachment = new Discord.MessageAttachment(image1, "quote.png");
                return message.channel.send(attachment);
            }
            else {
                let avatar = user.user.displayAvatarURL({ dynamic: false, format: 'png' });
                let content = text
                const split = content.split(' ')
                split.shift()
                content = split.join(' ')
                let image1 = await canvacord.Canvas.quote({ image: avatar, message: content, username: user.user.username });
                let attachment = new Discord.MessageAttachment(image1, "quote.gif");
                return message.channel.send(attachment);
            }




        }

    }
}

module.exports.help = {
  name: "quote"
};
