const Discord = require('discord.js')
module.exports = {
    name: 'resume',
    aliases: ['devam'],
    utilisation: '{prefix}resume',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`${message.author}, Şuanda çalan bir müzik yok!. ❌`);

        const success = queue.setPaused(false);
        const resume = new Discord.MessageEmbed()
        .setTitle('Resume')
        .setColor('AQUA')
        .setDescription(success ? `**${queue.current.title}**, İsimli şarkı çalmaya devam ediyor.✅` : `${message.author}, Birşeyler yanlış gitti. ❌`);
        return message.channel.send({ embeds: [resume]});
    },
};