const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
  run: async (bot, message, args) => {
    if (!message.member.permissions.has("MANAGE_MESSAGES"))
      return sendError("You do not have the nessecary permissions to report.", message.channel, message.react('759498707774734407'));
    let User = message.mentions.users.first() || null;

    if (User == null) {
      return sendError("Please mention a person. Example ;report <@!733149814174253116> Being Mean", message.channel, message.react('759498707774734407'));
    } else {
      let Reason = message.content.slice(";" + 22 + 7) || null;
      if (Reason == null) {
        return sendError("Please give a reason to report", message.channel, message.react('759498707774734407'));
      }
      let Avatar = User.displayAvatarURL();
      let Channel = message.guild.channels.cache.find(
        (ch) => ch.name === "reports"
      );
      if (!Channel)
        return sendError("Please create a channel called **reports** to send all reports in.", message.channel, message.react('759498707774734407'));
      let Embed = new MessageEmbed()
        .setAuthor("Report", "https://raw.githubusercontent.com/kasimakr/DiscordBot32312514/master/assets/Akrr.png")
        .setDescription(
          `<@!${message.author.id}> reported <@!${User.id}>. `
        )
        .setColor(`RED`)
        .setThumbnail(Avatar) 
        .setFooter(`Requested By: ${message.author.tag}`, `${message.author.displayAvatarURL()}`)
        .setTimestamp()
        .addFields(
          { name: "Reason", value: `${Reason.slice(1)}`, inline: true },
          {
            name: "Date of report",
            value: `${new Intl.DateTimeFormat("en-US").format(Date.now())}`,
            inline: true,
          }
        );
      Channel.send(Embed);
    }
  },
};

module.exports.help = {
  name: "setup"
};
