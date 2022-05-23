const Discord = require('discord.js');
module.exports = {
    name: 'sunucu',
    aliases: ['sunucubilgi'],
    utilisation: '{prefix}sevgi',
  async execute(client, msg, args) {
function checkDays(date) {
            let now = new Date();
            let diff = now.getTime() - date.getTime();
            let days = Math.floor(diff / 86400000);
            return days + (days == 1 ? " gün" : " gün") + " önce";
        };
        let guild = msg.channel.guild
        let serverSize = msg.guild.memberCount;
        let botCount = msg.guild.members.cache.filter(m => m.user.bot).size;
        let humanCount = serverSize - botCount;
        let boost = msg.guild.premiumSubscriptionCount;
        let boostlevel = msg.guild.premiumTier;
        let aktif = msg.guild.members.cache.filter(member => member.presence && (member.presence.status != "offline")).size
        const owner = msg.guild.members.cache.get(msg.guild.ownerId);
let sunucu = new Discord.MessageEmbed()
.setAuthor('Sunucu Bilgi', msg.guild.iconURL())
.setThumbnail(msg.guild.iconURL())
.addField('Sunucu Bilgileri', `Sunucu İsmi: \`${guild.name}\` \nSunucu ID: \`${msg.guild.id}\` \nSunucu Sahibi: \`${owner.user.tag}\` \nKuruluş Tarihi: \`${checkDays(msg.guild.createdAt)}\` \n Toplamda \`${boost}\` Boost Basılmış. \n \`${aktif}\` aktif üye bulunuyor.`)
.addField(`Üye Bilgileri `, `Toplam Üye: \`${humanCount}\` \nToplam Bot: \`${botCount}\` \nRol Sayısı: \`${guild.roles.cache.size}\``)
.setTimestamp()
.setColor('AQUA')
.setFooter('Sunucu Bilgi', msg.guild.iconURL())
return msg.channel.send({embeds : [sunucu]});

}};   
