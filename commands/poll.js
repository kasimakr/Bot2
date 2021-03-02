module.exports = {
    name: "poll",
    callback: async (message, arguments, text) => {
        if (!arguments) {
            message.channel.send('You did not specify what people should vote for')
            return;
        } else {
            message.delete()
        message.channel.send(`**${message.author.tag}** asks: ${arguments.join(" ")}`).then(sentMessage => {
            sentMessage.react('👍').then(() => {
                sentMessage.react('👎')
            })
        })
        }
    }
}

module.exports.help = {
    name: "poll"
};
