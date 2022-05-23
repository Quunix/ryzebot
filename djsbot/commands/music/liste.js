const { QueueRepeatMode } = require('discord-player');
const Discord = require('discord.js')
module.exports = {
    name: 'liste',
    aliases: ['list', 'queue'],
    utilisation: '{prefix}loop <queue>',
    voiceChannel: true,
    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id)
        const bos = new Discord.MessageEmbed()
        .setColor('#8387DE')
        .setDescription(`${message.author} Liste boş`);
        
        if (!queue.tracks[0]) return message.channel.send({embeds : [bos]})
        const list = new Discord.MessageEmbed()
        const methods = ['🔁', '🔂']
        
        const tracks = queue.tracks.map((track, i) => `**${i + 1}** - ${track.title} | ${track.author} (Started by <@${track. requestedBy.id}>)`);

        const songs = queue.tracks.length;
        const nextSongs = songs > 5 ? `ve **${songs - 5}** diğer şarkılar...` : `Liste de **${songs}** müzik kaldı `;
        list.setTitle(`Server Music List - ${message.guild.name} ${methods[queue.repeatMode]}`);
        list.setColor('AQUA')
        list.setThumbnail(message.guild.iconURL({ size: 2048, dynamic: true }));
        list.setDescription(`${tracks.slice(0, 5).join('\n')}\n \n${nextSongs }`);
        return message.channel.send({ embeds: [list] });
}};