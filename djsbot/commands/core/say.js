const { MessageEmbed, MessageButton, Permissions} = require("discord.js")
module.exports = {
    name: 'say',
    aliases: ['yaz'],
    utilisation: '{prefix}say', 
async execute(bot, message, args) {

  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('Yazmam için herhangi bir şey yazmalısın.');
  message.delete();
  const d = new MessageEmbed()
  .setDescription(`${mesaj}`)
  .setColor('GREEN')
  .setFooter(`${message.author.username} tarafından kullanıldı.`, message.author.displayAvatarURL({dynamic:true}))
  message.channel.send({embeds : [d]});
}}
