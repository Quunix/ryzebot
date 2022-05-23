const Discord = require("discord.js");
const { MessageEmbed, MessageButton, Permissions} = require("discord.js")
module.exports = {
    name: 'oyla',
    aliases: ['oylama'],
  execute(client, message, args) {  
let mesaj = args.slice(0).join(' ');
  if (mesaj.length < 1) return message.reply('Yazmam için herhangi bir şey yazmalısın.');
    message.delete();
    const d = new MessageEmbed()
    .setAuthor(`Oylama Başladı!`)
    .setThumbnail('https://cdn.discordapp.com/avatars/935257372526510092/cfffb22d2008038c2f29763f8bd81e75.webp?size=2048')
    .setTimestamp()
    .setDescription(`\n\n ${mesaj} \n\n`)
    .setColor('AQUA')

    const mesaj2 = message.channel.send({embeds : [d]}).then(x => x.react('✅') + x.react ('❎')) 
    }};