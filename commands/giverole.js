const sendError = require("../util/error");

module.exports.run = async (client, message, args) => {

if(!args[0]) return sendError("Please mention a person and a role. Example ;giverole <@!733149814174253116> Noob", message.channel, message.react('759498707774734407'));
let member = message.mentions.members.first();
if(!member) return sendError("Unknown user. Please menton a user. Example ;giverole <@!733149814174253116> Noob", message.channel, message.react('759498707774734407'));
if(!args[1]) return sendError("Unknown role. Please menton a role. Example ;giverole <@!733149814174253116> Noob", message.channel, message.react('759498707774734407'));

let roleName = args.slice(1).join(' ');
let rol = message.guild.roles.cache.find(r => r.name.toLowerCase().includes(roleName));
if(!rol) return sendError("Unknown role. Please menton a user. Example ;giverole <@!733149814174253116> Noob", message.channel, message.react('759498707774734407'));

if(member.id !== message.author.id) {
    if(member.roles.cache.some(role => ['adminRoleID', 'modRoleID'].includes(role.id))) {
        return sendError("You can't give roles to people who have roles already.", message.channel, message.react('759498707774734407'));
    }
} else {
    let highestRole = message.member.roles.highest;
    if(rol.position >= highestRole.position) {
        return sendError("You are unable to get roles obove your current one", message.channel, message.react('759498707774734407'));
    }
}

if(member.roles.cache.get(rol.id)) return sendError("User already has the role.", message.channel, message.react('759498707774734407'));
let maxRole = message.guild.roles.cache.find(r => r.name.toLowerCase().includes('max role name'));

if(rol.position >= maxRole.position) {
    let bannedRoles = message.guild.roles.cache.filter(role => {
        return role.position >= maxRole.position;
    }).map(role => { return role.name });
    return message.channel.send(`you cannot grant these roles, \`${bannedRoles.join(', ')}\``);
}

try {
    member.roles.add(rol.id)
    .then(() => {
        return message.channel.send(`Done!, ${rol.name} granted to ${member.displayName}`);
    })
} catch(e) {
    console.error(e);
}

}
module.exports.help = {
  name: 'giverole'
}
