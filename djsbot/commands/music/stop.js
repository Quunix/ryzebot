const Discord = require('discord.js')
module.exports = {
    name: 'stop',
    aliases: ['bitir'],
    utilisation: '{prefix}kapat',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`${message.author}, Şuanda çalan bir müzik yok!. ❌`);

        queue.destroy();

        const Stop = new Discord.MessageEmbed()
        .setTitle('Stop')
        .setColor('AQUA')
        .setDescription(`Bu sunucuda çalan müzik kapatıldı, bir dahaki sefere görüşürüz. ✅`);
        message.channel.send({ embeds: [ Stop] })

    },
};