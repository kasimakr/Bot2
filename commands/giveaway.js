const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");
const ms = require("ms");
module.exports = {
  name: "giveaway",
  run: async (bot, message, args) => {
    if (!args[0]) return message.channel.send(`You did not specify your time!`);
    if (
      !args[0].endsWith("d") &&
      !args[0].endsWith("h") &&
      !args[0].endsWith("m") &&
      !args[0].endsWith("s")
    )
      return message.channel.send(
        `You did not use the correct formatting for the time!`
      );
    if (isNaN(args[0][0])) return message.channel.send(`That is not a number!`);
    let channel = message.mentions.channels.first();
    if (!channel)
      return message.channel.send(
        `I could not find that channel in the guild!`
      );
    let prize = args.slice(2).join(" ");
    if (!prize) return message.channel.send(`No prize specified!`);
    message.channel.send(`Giveaway created in ${channel}`);
    let Embed = new MessageEmbed()
      .setAuthor("New Giveaway!", "https://raw.githubusercontent.com/kasimakr/DiscordBot32312514/master/assets/Akrr.png")
      .setDescription(
        `${message.author} is hosting a giveaway for a **${prize}**`
      )
      .setTimestamp(Date.now() + ms(args[0]))
      .setFooter("Good Luck!")
      .setColor('#f7f7f7');
    let m = await channel.send(Embed);
    m.react("🎉");
    setTimeout(() => {
      if (m.reactions.cache.get("🎉").count <= 1) {
        message.channel.send(`Reactions: ${m.reactions.cache.get("🎉").count}`);
        return sendError("No one entered the giveaway :/ ", message.channel, message.react('759498707774734407'));
      }

      let winner = m.reactions.cache
        .get("🎉")
        .users.cache.filter((u) => !u.bot)
        .random();
      channel.send(
        `The winner of the giveaway for **${prize}** is... ${winner}! Congradultions!`
      );
    }, ms(args[0]));
  },
};

module.exports.help = {
    name: "giveaway"
};
