const Discord = require('discord.js');
const config = require('../../config');
module.exports = {
    name: 'clear',
    aliases: ['temizle'],
    utilisation: '{prefix}clear',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);


        if (!queue || !queue.playing) return message.channel.send(`${message.author}, Şu anda çalan müzik yok. ❌`);

        if (!queue.tracks[0]) return message.channel.send(`${message.author}, Geçerli olandan sonra zaten sırada müzik yok. ❌`);

        await queue.clear();
        const clear = new Discord.MessageEmbed()
        .setTitle('Clear')
        .setColor('AQUA')
        .setDescription(`Liste temizlendi. 🗑️`);
        message.channel.send({ embeds: [clear] })
    },
};