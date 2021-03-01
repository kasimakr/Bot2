module.exports = {
    name: 'nuke',
  
    execute(bot, message, args) {
if(!message.member.hasPermission('ADMINISTRATOR') return message.channel.send('no') // check for required permission
        message.channel.send('**TACTICAL NUKE INCOMING!**') // this is optional, you can delete this if you want
        let channel = message.guild.channels.cache.get(message.channel.id) // get the channel to nuke (basically the channel the command was sent in)
        var position = channel.position // We need the channel position to we can move the cloned channel to where the original channel was

        channel.clone().then((channel2) => { // clones the channel, we define this channel as 'channel2' in a 'then' statement
            channel2.setPosition(position) // this is where we use the position variable to move the cloned channel
            channel.delete() // now that we put the cloned channel where needs it to be, we can delete the original
            channel2.send('**NUKED CHANNEL SUCCESSFULLY**') // sends a message to confirm that it was able to nuke it
            channel2.send('https://giphy.com/gifs/80s-akira-oQtO6wKK2q0c8') // sends an anime nuke gif
        })
        

        

        
    }

}
module.exports.help = {
  name: "nuke"
};
