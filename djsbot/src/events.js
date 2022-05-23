const Discord = require('discord.js')
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');



player.on('error', (queue, error) => {
    console.log(`Şarkı kuyruğu ile ilgili bir sorun oluştu => ${error.message}`);
});

player.on('connectionError', (queue, error) => {
    console.log(`Bağlanma sorunu yaşıyorum => ${error.message}`);
});
player.on('trackStart', (queue, track) => {
    if (!client.config.opt.loopMessage && queue.repeatMode !== 0) return;
    const list = new Discord.MessageEmbed()
        .setColor('AQUA')
        .setThumbnail(track.thumbnail)
        .setTitle(track.title)
        .setDescription(`🎵 Müzik çalmaya başladı -> Kanal: **${queue.connection.channel.name}**`);
        const saveButton = new MessageButton();

        saveButton.setLabel('Şarkıyı Kaydet');
        saveButton.setCustomId('saveTrack');
        saveButton.setStyle('SUCCESS');
        const row = new MessageActionRow().addComponents(saveButton);

    queue.metadata.send({ embeds: [list], components: [row] });
});
player.on('trackAdd', (queue, track) => {
    const tracks = new Discord.MessageEmbed()
        .setColor('AQUA')
        .setDescription(`**${track.title}** İsimli şarkı çalma listesine eklendi ✅`);


    queue.metadata.send({ embeds: [tracks]});
});

player.on('botDisconnect', (queue) => {
    queue.metadata.send('Bağlı olduğum ses kanalından birisi beni attı bütün çalma listesi temizlendi ❌');
});

player.on('channelEmpty', (queue) => {
    queue.metadata.send('Bulunduğum sesli kanalda kimse olmadığı için ses kanalından ayrıldım ❌');
});

player.on('queueEnd', (queue) => {
    const bitti = new Discord.MessageEmbed()
    .setColor('AQUA')
    .setDescription('Çalma listesi bitti ✅');

    queue.metadata.send({ embeds: [bitti]});
});