const Discord = require('discord.js')
module.exports = {
    name: 'skip',
    aliases: ['geç'],
    utilisation: '{prefix}skip',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`${message.author}, Şuanda çalan bir müzik yok!. ❌`);

        const success = queue.skip();
        const skip = new Discord.MessageEmbed()
        .setColor('AQUA')
        .setDescription(success ? `**${queue.current.title}**, İsimli şarkı atlandı. ✅` : `${message.author}, Birşeyler yanlış gitti. ❌`);
        return message.channel.send({ embeds: [skip] });
    },
};