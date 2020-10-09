const { MessageEmbed } = require("discord.js")

/**
 * Easy to send errors because im lazy to do the same things :p
 * @param {String} text - Message which is need to send
 * @param {TextChannel} channel - A Channel to send error
 */
module.exports = async (text, channel) => {
    let embed = new MessageEmbed()
    .setColor("BLUE")
    .setAuthor("Purge", "https://raw.githubusercontent.com/kasimakr/DiscordBot32312514/master/assets/KasimAkrSad.png")
    .setDescription(text)
    .setFooter("Version: 1.0.5")
    await channel.send(embed)
}
