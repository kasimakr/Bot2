module.exports = {
    name: 'say',
    execute(message, args) {

        
       if(!args[0]) return message.reply(`What do you want me to say?`).then(msg => msg.delete({ timeout: 5000}))
       else{
        message.delete()
        message.channel.send(args.join(" "))
       }
    }
}
