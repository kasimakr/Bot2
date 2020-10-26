const { MessageEmbed } = require("discord.js");
let questions = [
  {
    title: "Best programming language",
    options: ["JavaScript", "Python", "Ruby", "Rust"],
    correct: 1,
  },
  {
    title: "Best Bot On Discord",
    options: ["Mee6", "KasimAkr", "Dyno", "Carl-Bot"],
    correct: 2,
  },
    {
    title: "What is the capital of Cuba?",
    options: ["Bauta", "Pablito", "Havana", "Mariel"],
    correct: 3,
  },
];
module.exports = {
  name: "trivia",
  run: async (bot, message, args) => {
    let q = questions[Math.floor(Math.random() * questions.length)];
    let i = 0;
    const Embed = new MessageEmbed()
      .setTitle(q.title, "https://raw.githubusercontent.com/kasimakr/DiscordBot32312514/master/assets/Akrr.png")
      .setDescription(
        q.options.map((opt) => {
          i++;
          return `${i} - ${opt}\n`;
        })
      )
      .setColor(`GREEN`)
      .setFooter(
        `Reply to this message with the correct question number! You have 15 seconds.`
      );
    message.channel.send(Embed);
    try {
      let answer = message.content.replace(';trivia',' ');
      let msgs = await message.channel.awaitMessages(
        (u2) => u2.author.id === message.author.id,
        { time: 15000, max: 1, errors: ["time"] }
      );
      if (parseInt(answer.content) == q.correct) {
        return message.channel.send(`You got it correct!`);
      } else {
        return message.channel.send(`You got it incorrect.`);
      }
    } catch (e) {
      return message.channel.send(`You did not answer!`);
    }
  },
};

module.exports.help = {
    name: "trivia"
};
