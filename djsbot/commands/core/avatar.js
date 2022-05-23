const Discord = require('discord.js')
module.exports = {
    name: 'avatar',
    aliases: ['av'],
    utilisation: '{prefix}avatar',

    execute(client, message, args) {
        let kişi = message.mentions.members.first();


        if(kişi){const prf = new Discord.MessageEmbed()
            .setDescription(`${kişi} Adlı kullanıcının profil resmi`)
            .setColor('AQUA')
            .setImage(kişi.user.avatarURL({dynamic: true, size: 2048}))
            message.channel.send({embeds : [prf]})} 
        else {const prf = new Discord.MessageEmbed()
            .setDescription(`${message.author} Profil Resminiz`)
            .setColor('AQUA')
            .setImage(message.author.avatarURL({dynamic: true, size: 2048}))
            message.channel.send({embeds : [prf]})
        }
    }}