const Discord = require('discord.js');
const util = require('minecraft-server-util');

module.exports = {
    name: "mcserver",
    async execute(client, message, args) {
const ip = message.content.split(' ').slice(1).join(' ');
if(!ip) return message.reply('¡Debes colocar una ip de un servidor de minecraft!')
        util.status(ip) // port is default 25565
    .then((response) => {
        const embed = new Discord.MessageEmbed()
        .setDescription(`Ip de el servidor: ${response.host}\nUsuarios conectados: ${response.onlinePlayers}\nMáximo de jugadores: ${response.maxPlayers}\nVersión: ${response.version}`)
        .setColor('RANDOM')
        message.channel.send(embed);
    });    
}
}
module.exports.help = {
  name: "mcserver"
};
