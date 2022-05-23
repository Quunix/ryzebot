const maxVol = 99999999999999999999999999999999999999999999999999999999999999999999999999999;

module.exports = {
    name: 'bass',
    utilisation: `{prefix}volume [1-${maxVol}]`,
    voiceChannel: true,

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`${message.author}, Şuanda çalan bir müzik yok!. ❌`);

        const vol = 99999999999999999999999999999999999999999999999999999999999999999999999999999;
        
        const success = queue.setVolume(vol);

        return message.channel.send(success ? `Bass yükleniyor dikkat! 🔊` : `${message.author}, Birşeyler yanlış gitti. ❌`);
    },
};