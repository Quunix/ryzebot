const { MessageEmbed} = require("discord.js");
const Discord = require('discord.js');
const moment = require("moment");
require("moment-duration-format");
module.exports = {
    name: 'istatistik',
    aliases: ['is'],
    utilisation: '{prefix}istatistik', 
async execute(bot, message, args) {

  const seksizaman = moment
    .duration(bot.uptime)
    .format(" D [Gün], H [Saat], m [Dakika], s [Saniye]");
  const cse = new MessageEmbed()
    .setColor("AQUA")
    .setTitle(`⭐ ${bot.user.username} İstatistik`)
    .setThumbnail(bot.user.avatarURL())
    .setFooter({ text: "Quunix#0030 Tarafından yapılmıştır." })

    .setDescription(
      `  Toplam Kullanıcı: \`` +
        bot.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString() +
        `\n\`  Toplam Sunucu: \`` +
        bot.guilds.cache.size.toLocaleString() +
        `\n\`  Toplam Kanal: \`` +
        bot.channels.cache.size.toLocaleString() +
        `\`\n \n` +
        `  Bellek Kullanımı: \`` +
        (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) +
        ` MB\`\n` +
        `   Çalışma Süresi: \`${seksizaman}\`` 
    )

  return message.channel.send({ embeds: [cse] })
}};
