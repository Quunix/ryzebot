const Discord = require('discord.js');
module.exports = {
    name: 'back',
    aliases: ['geri'],
    utilisation: '{prefix}back',
    voiceChannel: true,

    
    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`${message.author}, İlk önce müzik açmalısın ❌`);

        if (!queue.previousTracks[1]) return message.channel.send(`${message.author}, Açılacak müzik yok ❌`);

        await queue.back();

        const back = new Discord.MessageEmbed()
        .setTitle('Back')
        .setColor('AQUA')
        .setDescription(`Bir önceki müzik açıldı ✅`);
        message.channel.send({ embeds: [back] })
    }};