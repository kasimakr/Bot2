const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const m = await message.channel.send("Recieved!");
  m.edit(`That was quick! Ping: \`${m.createdTimestamp - message.createdTimestamp}ms\``);
};

module.exports.help = {
  name: "ping"
};
