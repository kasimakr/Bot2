const Discord = require("discord.js");
const sendError = require("../util/error");
const sendTPemplate = require("../util/mputemplate");
const sendTemplate = require("../util/mptemplate");

module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) //Here we check if the user can run the command.
    return sendError("You do not have the nessecary permissions to purge.", message.channel, message.react('759498707774734407'));

  const deleteCount = parseInt(args[0], 10); //This will get the number of messages we want to delete as an integer.
  if (!deleteCount || deleteCount < 0 || deleteCount > 100000000) //This makes sure that the minimum amount of messages we can delete is 2, and the max is 100. You can change this if you want.
    return sendError("Please specify a amount you would like to delete.", message.channel, message.react('759498707774734407'));
    message.channel
    .bulkDelete(deleteCount) //This will delete the specified number of messages.
    .then(deleted => message.channel.send(`I successfully deleted \`${deleted.size}\` messages.`))
    .catch(error =>
      message.channel.send(`Couldn't purge messages because of, ${error}.`, message.react('759498707774734407')) //This will make the bot send a message if there is an error.
    );
};

module.exports.help = {
  name: "purge"
};
