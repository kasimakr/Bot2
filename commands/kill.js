const {Client, Message, MessageEmbed} = require('discord.js');
module.exports = {
    name: "kill",
    run:async(client,message,args)=>{
        const target = message.mentions.users.first()
        const DyingWays = ['Scooter ankle R.I.P','Putting a toaster in the bath','promising ur son robux','insulting gurenge that idiot','watching gacha','watching a netflix adaptation','insulting e']
        const dyingIndex = Math.floor(Math.random()* DyingWays.length);
        message.channel.send(`${target} died by ${DyingWays[dyingIndex]} `)
    }
}
module.exports.help = {
    name: "kill"
};
