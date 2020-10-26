const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {
    let data = client.db.all().filter(i => i.ID.startsWith("xp_")).sort((a, b) => b.data - a.data);
    if (data.length < 1) return message.channel.send("No leaderboard");
    let myrank = data.map(m => m.ID).indexOf(`xp_${message.author.id}`) + 1 || "N/A";
    data.length = 20;
    let lb = [];
    for (let i in data)  {
        let id = data[i].ID.split("_")[1];
        let user = await client.users.fetch(id);
        user = user ? user.tag : "Unknown User#0000";
        let rank = data.indexOf(data[i]) + 1;
        let level = client.db.get(`level_${id}`);
        let xp = data[i].data;
        let xpreq = Math.floor(Math.pow(level / 0.1, 2));
        lb.push({
            user: { id, tag: user },
            rank,
            level,
            xp,
            xpreq
        });
    };

    const embed = new MessageEmbed()
    .setAuthor("Warnings", "https://raw.githubusercontent.com/kasimakr/DiscordBot32312514/master/assets/Akrr.png")
   .setColor('#f7f7f7')
    lb.forEach(d => {
        embed.addField(`${d.rank} Place → ${d.user.tag} `, `**Level** → ${d.level}\n**XP** → ${d.xp} / ${d.xpreq}`);
    });
    embed.setTimestamp()
    embed.setFooter(`Your Position: ${myrank} | Start a support ticket if you have any issues or concerns.`);
    return message.channel.send(embed);
};

module.exports.help = {
    name: "leaderboard"
};
