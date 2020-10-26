const Discord = module.require('discord.js');

var hd = [
    "Heads",
    "Tails"
];
module.exports = {
    name: "flipcoin",
run: async (bot, message, args) => {

  const m = await message.channel.send("Flipping.");
  m.edit(message.author.toString() + " You Flipped: " + (hd[Math.floor(Math.random() * hd.length)]));
}
};

module.exports.help = {
    name: "flipcoin"
};
