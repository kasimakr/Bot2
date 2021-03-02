const Discord = require('discord.js');

module.exports = {
    name: "iqtest",
    callback: async (message) => {
        const iq = Math.floor(Math.random() * 100) + 1;

        const iEmbed = new Discord.MessageEmbed()
            .setTitle("IQ Test")
            .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL())
            .setDescription(`Your IQ is: \`${iq}\`!`)

        const ioEmbed = new Discord.MessageEmbed()
            .setTitle("IQ Test")
            .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL())
            .setDescription(`Your IQ is: \`1,000,000,000,000\`!`)
            .setFooter(`Requested By: ${message.author.tag}`, `${message.author.displayAvatarURL()}`)
            .setTimestamp()
            .setColor('#f7f7f7');

        if (message.author.id !== message.guild.owner.id) {
        message.channel.send(iEmbed);
        } else {
          message.channel.send(ioEmbed);
        };
    },
};

module.exports.help = {
  name: "iqtest"
};
