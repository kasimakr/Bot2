const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "announce",
  run: async (bot, message, args) => {
    let rChannel = message.guild.channels.cache.get(args[0]);
    if (!rChannel)
      return message.channel.send(
        `You did not specify your channel to send the announcement too!`
      );
    console.log(rChannel);
    let MSG = message.content
      .split(`${bot.prefix}announce ${rChannel.id} `)
      .join("");
    if (!MSG)
      return message.channel.send(`You did not specify your message to send!`);
    let Reason = MSG.replace(';announce',' ');
    const _ = new MessageEmbed()
    
      .setTitle(`New announcement!`)
      .setDescription(`${Reason}`)
      .setColor("BLUE");
    rChannel.send(_);
    message.delete();
  },
};

module.exports.help = {
    name: "announce"
};
