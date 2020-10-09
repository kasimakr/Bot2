const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
const sendError = require("../util/error");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8")); //We use this so that it knows what the database is. We'll be using a JSON database.

module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("KICK_MEMBERS")) return sendError("You do not have the suffincient permission to warn", message.channel, message.react('759498707774734407')); //Checks to see if the user has permission to warn members.

  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]); //This enables us to know what member we want to warn.
  if (!wUser) return sendError("Please mention a person.", message.channel, message.react('759498707774734407'));
  if (wUser.hasPermission("KICK_MEMBERS")) return sendError("Members role is above mine.", message.channel, message.react('759498707774734407')); //This will prevent staff members warning each other.

  let reason = args.join(" ").slice(22);
  if (!reason) reason = "Unspecified Reason."; //This sets the reason as no reason specified if we dont include a reason.

  if (!warns[wUser.id])warns[wUser.id] = {
    warns: 0
  }; //This sets the default number of warnings as 0.

  warns[wUser.id].warns++; //This will add 1 warning each time we use the command.

  fs.writeFile("./warnings.json", JSON.stringify(warns), err => {
    if (err) console.log(err);
  }); //This will edit the warnings.json file.

  let warnembed = new Discord.MessageEmbed() //This is our embed.
    .setAuthor("Warnings", "https://raw.githubusercontent.com/kasimakr/DiscordBot32312514/master/assets/Akrr.png")
    .addField("User", wUser)
    .addField("Reason:", reason)
    .addField("Current Warnings", warns[wUser.id].warns)
    .setColor("BLUE")
    .setFooter("Version: 1.0.5")
  
  message.channel.send(warnembed); //This sends our embed.
};

module.exports.help = {
  name: "warn"
};
