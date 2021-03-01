const ms = require("ms");
const { MessageEmbed } = require("discord.js");
const { Timers } = require("../util/variable.js");
module.exports = {
  name: "timer",
  run: async (bot, message, args) => {
    if (!args[0]) {
      return message.channel.send(
        `You did not specify the amount of time you wish to set a timer for!`
      );
    }
    if (!args[0].endsWith("d")) {
      if (!args[0].endsWith("h")) {
        if (!args[0].endsWith("m")) {
          if (!args[0].endsWith("s")) {
          return message.channel.send(
            `You did not use the proper format for the the time!`
          );
        }
      }
    }
    if (isNaN(args[0][0])) {
      return message.channel.send(`That is not a number!`);
    }
    Timers.set(message.author.id + " G " + message.guild.name, {
      Guild: message.guild.name,
      Author: {
        Tag: message.author.tag,
        ID: message.author.id,
      },
      Time: ms(args[0]),
    });
    message.channel.send(
      `I have set a timer for ${args[0]} <@!${message.author.id}>. I will send a dm once the timer has completed.`
    );
    setTimeout(() => {
      let Embed = new MessageEmbed()
        .setAuthor("Timer Finished", "https://raw.githubusercontent.com/kasimakr/DiscordBot32312514/master/assets/Akrr.png")
        .setDescription(
          `Hey <@!${message.author.id}>, Youre timer for ${args[0]} has finished!`
        )
        .setFooter(`Requested By: ${message.author.tag}`, `${message.author.displayAvatarURL()}`)
        .setTimestamp()
        .setColor('#f7f7f7');
      message.author.send(Embed);
      Timers.delete(message.author.id + " G " + message.guild.name);
    }, ms(args[0]));
  }
 },
};

module.exports.help = {
    name: "timer"
};
