const { QueryType } = require('discord-player');
const Discord = require('discord.js')
module.exports = {
    name: 'play',
    aliases: ['p',"başlat"],
    utilisation: '{prefix}play [song name/URL]',
    voiceChannel: true,

    async execute(client, message, args) {
      const arama = new Discord.MessageEmbed()
      .setTitle('İşlem başarısız.')
      .setTimestamp()
      .setColor('AQUA')
      .setDescription(`Aramak istediğin müziğin ismini veya linkini yaz. \n\n **+play** {müzik} **veya** {url}`)
        if (!args[0]) return message.channel.send({embeds : [arama]});

        const res = await player.search(args.join(' '), {
          
            requestedBy: message.member,
            searchEngine: QueryType.AUTO
        });

      const bas = new Discord.MessageEmbed()
      .setTitle('İşlem başarısız.')
      .setTimestamp()
      .setColor('AQUA')
      .setDescription(`${message.author}, Sonuc bulunamadı. `)
        if (!res || !res.tracks.length) return message.channel.send({embeds : [bas]});

        const queue = await player.createQueue(message.guild, {
            metadata: message.channel
        });

        try {
            if (!queue.connection) await queue.connect(message.member.voice.channel);
        } catch {
            await player.deleteQueue(message.guild.id);
       const kanal = new Discord.MessageEmbed()
      .setTitle('İşlem başarısız.')
      .setTimestamp()
      .setColor('AQUA')
      .setDescription(`${message.author}, Bulunduğun kanala girme yetkim yok. `)
            return message.channel.send({embeds : [kanal]});
        }
        const ply = new Discord.MessageEmbed()
        .setColor('AQUA')
        .setDescription(`${res.playlist ? 'Listeniz' : 'Parçanız'} Yükleniyor... 🎧`);
        await message.channel.send({ embeds: [ply] });

        res.playlist ? queue.addTracks(res.tracks) : queue.addTrack(res.tracks[0]);

        if (!queue.playing) await queue.play();
    },
};