onst Discord = require("discord.js");

const client = new Discord.Client({
	partials: ["MESSAGE", "CHANNEL", "REACTION"]
});
const fs = require("fs");
client.commands = new Discord.Collection();

client.db = require("quick.db");
client.commands = new Discord.Collection();
client.cooldown = new Discord.Collection();
client.config = {
    TOKEN: "NzMzMTQ5ODE0MTc0MjUzMTE2.Xw-8-A.wiEtFZNm3T6JfgYZgSPzJvxPShU",
    prefix: ";",
    cooldown: 15000
};

fs.readdir("./commands/", (err, files) => {
	if (err) console.log(err);
	let jsfile = files.filter(f => f.split(".").pop() === "js");
	if (jsfile.length <= 0) {
		console.log("Couldn't find commands.");
		return;
	}
	jsfile.forEach((f, i) => {
		let props = require(`./commands/${f}`);
		console.log(`${f} loaded.`);
		client.commands.set(props.help.name, props);
	});
});

// Events
client.once("ready", () => {
    console.log("Ready!");
});

client.on("error", console.error);

client.on("warn", console.warn);

client.on("message", async (message) => {
    if (!message.guild || message.author.bot) return;
    // Handle XP
    xp(message);
    // command handler
    if (!message.content.startsWith(client.config.prefix)) return;
    let args = message.content.slice(client.config.prefix.length).trim().split(" ");
    let command = args.shift().toLowerCase();
    let commandFile = client.commands.get(command);
    if (!commandFile) return;
    commandFile.run(client, message, args);
});

function xp(message) {
    if (!client.cooldown.has(`${message.author.id}`) || !(Date.now() - client.cooldown.get(`${message.author.id}`) > client.config.cooldown)) {
        let xp = client.db.add(`xp_${message.author.id}`, 1);
        let level = Math.floor(0.3 * Math.sqrt(xp));
        let lvl = client.db.get(`level_${message.author.id}`) || client.db.set(`level_${message.author.id}`,1);;
        if (level > lvl) {
            let newLevel = client.db.set(`level_${message.author.id}`,level);
            message.channel.send(` ${message.author.toString()}, You just advanced to level ${newLevel}! Lets celebrate :tada: `);
        }
        client.cooldown.set(`${message.author.id}`, Date.now());
    }
}



client.login('NzM\PzJvxPShU');
