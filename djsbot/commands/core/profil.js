const Discord = require('discord.js')
const moment = require('moment')
module.exports = {
    name: 'user',
    aliases: ['profil'],
    utilisation: '{prefix}user',

    execute(client, message, args) {
      
      let user = message.mentions.users.first() || message.author;
      const durum = message.mentions.members.first() ? message.mentions.members.first().presence : message.member.presence

      const kullanıcı = new Discord.MessageEmbed()
      .setTitle(user.tag)
      .setColor('AQUA')
      .setTimestamp()
      .setThumbnail(user.avatarURL({dynamic: true}))
      .setDescription(`**Joined discord:** <t:${Math.floor(user.createdTimestamp / 1000)}:d> \n\n **Name on server :** ${user} \n\n **Status :** ${durum ? durum.status : "Offline" }`)
      message.channel.send({embeds : [kullanıcı]});
    }}