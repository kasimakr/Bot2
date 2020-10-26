const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "8ball",
  run: async (bot, message, args) => {
    let question = message.content.replace(';8ball',' ');
    if (!question)
      return message.channel.send(`You did not specify your question!`);
    else {
      let responses = [
        "Yes",
        "No",
        "Definetly",
        "Absoloutely",
        "Not in a million years",
        "Never",
        "Oh My God Yes",
      ];
      let Response =
        responses[Math.floor(Math.random() * responses.length - 1)];
      let Embed = new MessageEmbed()
        .setAuthor("8Ball", "https://raw.githubusercontent.com/kasimakr/DiscordBot32312514/master/assets/Akrr.png")
        .setDescription(`Your question: ${question}\nMy reply: ${Response}`)
        .setColor('#f7f7f7');
      message.channel.send(Embed);
    }
  },
};

module.exports.help = {
    name: "8ball"
};
