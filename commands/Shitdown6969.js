module.exports = {
    name: "Shitdown6969",
    async execute(msg, args){
       if(msg.author.id != "ID") return msg.channel.send("ERROR 404")
    try {
        await msg.channel.send("Bot is shutting down...")
        process.exit()
    } catch(e) {
        msg.channel.send(`ERROR: ${e.message}`)
    }

    }
}

module.exports.help = {
  name: "setup"
};
