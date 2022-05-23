const Discord = require('discord.js')
module.exports = {
    name: 'pause',
    aliases: ["dur"],
    utilisation: '{prefix}pause',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`${message.author}, Şuanda çalan bir müzik yok!. ❌`);

        const success = queue.setPaused(true);
        const pause = new Discord.MessageEmbed()
        .setTitle('AQUA')
        .setColor('#8387DE')
        .setDescription(success ? `Şuanda çalan **${queue.current.title}** isimli müzik durdu. ✅` : `${message.author}, Birşeyler yanlış gitti. ❌`);
        return message.channel.send({ embeds: [pause]});
    },
};