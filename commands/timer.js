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
      `${message.author.tag} you have set a timer for ${args[0]} (${ms(
        args[0]
      )}MS). Check your dm's`
    );
    setTimeout(() => {
      let Embed = new MessageEmbed()
        .setAuthor("Timer Finished", "https://raw.githubusercontent.com/kasimakr/DiscordBot32312514/master/assets/Akrr.png")
        .setDescription(
          `Your timer for ${args[0]} (${ms(args[0])}MS) has finished!`
        )
        .setColor(`GREEN`);
      message.author.send(Embed);
      Timers.delete(message.author.id + " G " + message.guild.name);
    }, ms(args[0]));
  }
 },
};

module.exports.help = {
    name: "timer"
};
