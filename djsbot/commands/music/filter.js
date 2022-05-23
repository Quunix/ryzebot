const Discord = require('discord.js')
module.exports = {
    name: 'filter',
    aliases: ["filtre"],
    utilisation: '{prefix}filter [filter name]',
    voiceChannel: true,

    async execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`${message.author}, Şuanda çalan bir müzik yok!. ❌`);

        const actualFilter = queue.getFiltersEnabled()[0];

        if (!args[0]) return message.channel.send(`${message.author}, Lütfen geçerli bir filtre ismi yazın. ❌\n\`bassboost, 8D, nightcore\``);

        const filters = [];
        queue.getFiltersEnabled().map(x => filters.push(x));
        queue.getFiltersDisabled().map(x => filters.push(x));

        const filter = filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filter) return message.channel.send(`${message.author}, Yazdığın isimde bir filtre bulamadım. ❌\n\`bassboost, 8D, nightcore\``);

        const filtersUpdated = {};

        filtersUpdated[filter] = queue.getFiltersEnabled().includes(filter) ? false : true;

        await queue.setFilters(filtersUpdated);

        const filtre = new Discord.MessageEmbed()
        .setTitle('Filter')
        .setColor('AQUA')
        .setDescription(`Uygulandı: **${filter}**, Filtre Durumu: **${queue.getFiltersEnabled().includes(filter) ? 'Aktif' : 'Aktif Değil'}** ✅\n**Müzik uzun ise filtre uygulama süreside ona göre uzaya bilir.**`);
        message.channel.send({ embeds: [filtre] })
    },
};