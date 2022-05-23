const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");
module.exports = {
  name: 'help',
  aliases: ['yardım'],
  utilisation: '{prefix}help',
execute(client, message, args) {

const prefix = "+"

let buton = new MessageButton()
.setStyle("SECONDARY")
.setLabel("Müzik")
.setEmoji("💎")
.setCustomId("moderasyon")
let buton1 = new MessageButton()
.setStyle("SECONDARY")
.setLabel("Eğlence")
.setEmoji("💥")
.setCustomId("bot")
let buton2 = new MessageButton()
.setStyle("SECONDARY")
.setLabel("Kullanıcı ")
.setEmoji("⚙️")
.setCustomId("kullanıcı")
let buton3 = new MessageButton()
.setStyle("SUCCESS")
.setLabel("AnaSayfa")
.setEmoji("🏠")
.setCustomId("anasayfa")

let buton4 = new MessageButton()
.setStyle("DANGER")
.setLabel("Timeout")
.setDisabled(true)
.setCustomId("timeout")

let embed = new MessageEmbed()
.setAuthor(`${client.user.username} Yardım Menüsü`, client.user.avatarURL())
.setDescription(`> Botun komutları hakkında bilgi almak için istediğiniz seçeneğin butonuna tıklayın!`)
.addField("・`💎 Müzik` ↷",
"> Butonuna tıklayarak **Müzik komutları** hakkında bilgi alabilirsiniz.")
.addField("・`💥 Eğlence` ↷",
"> Butonuna tıklayarak **Eğlence Komutları** hakkında bilgi alabilirsiniz.")
.addField("・`⚙️ Kullanıcı` ↷",
"> Butonuna tıklayarak **Kullanıcı Komutları** hakkında bilgi alabilirsiniz.")
.addField("・`🏠 Anasayfa` ↷",
"> Butonuna tıklayarak bu sayfaya geri dönersiniz.")
.setFooter(`${message.author.username} tarafından kullanıldı.`, message.author.displayAvatarURL({dynamic:true}))
.setColor("AQUA")

message.channel.send({embeds: [embed], components: [new MessageActionRow({ components: [buton, buton1, buton2, buton3]})]}).then(async msg => {

const filter = x => x.user.id === message.author.id
let collector = msg.createMessageComponentCollector({ filter, time: 300000 })

collector.on("collect", async button => {
if(button.customId === "moderasyon") {

let moderasyon = new MessageEmbed()
.setAuthor(`${client.user.username} 💎 Müzik Komutları`, client.user.avatarURL())
.setDescription(`> Botun Müzik komutları hakkında bilgi alırsınız!`)
.addField("・Komutlar ↷",
`
${prefix}**play**, Şarkı açmanızı sağlar.
${prefix}**volume**, Sesi yükseltip alçaltmanızı sağlar.
${prefix}**skip**, Listede bulunan sonraki müziğe geçer.
${prefix}**save**, Müziğin ismini özel mesaj olarak atar.
${prefix}**nowplaying**, Çalan müziği gösterir.
${prefix}**search**, Müzik aratıp arasından birini seçmenizi sağlar.
${prefix}**loop**, Müziği döngüye sokar.
${prefix}**filter**, Müziğe filtre eklemenizi sağlar.
${prefix}**clear**, Listede olan bütün müzikleri siler.
${prefix}**bass**, Müziğin ses seviyesini en yükseğe çıkartır.
${prefix}**kapat**, Müziği kapatır.
${prefix}**resume**, Müziği devam ettirir.
${prefix}**pause**, Müziği durdurur.
${prefix}**back**, Önceki şarkıya geçer.
`)
.setFooter(`${message.author.username} tarafından kullanıldı.`, message.author.displayAvatarURL({dynamic:true}))
.setColor("AQUA")

msg.edit({content: "💎 Müzik", embeds: [moderasyon], components: [new MessageActionRow({ components: [buton3]})]})

}

if(button.customId === "kullanıcı") {

let kullanıcı = new MessageEmbed()
.setAuthor(`${client.user.username} ⚙️ Kullanıcı Komutları`, client.user.avatarURL())
.setDescription(`> Botun kullanıcı komutları hakkında bilgi alırsınız!`)
.addField("・Komutlar ↷",
`
**${prefix}avatar ** Üyenin avatarına bakarsınız.
**${prefix}banner** Üyenin bannerına bakarsınız.
**${prefix}istatistik** Botun bilgilerini öğrenirsiniz.
**${prefix}kısalt** Girilen linki kısaltıp kullandığınız kanala atar. 
**${prefix}oylama** Oylama yaparsınız. 
**${prefix}saat** Açılınca biri saat yazdığında saati kanala atar.
**${prefix}user** Kişinin bilgisini verir.
**${prefix}sunucubilgi** Sunucu bilgisi verir.
**${prefix}spotify** Etiketlenen kişinin Spotify'da ne dinlediğini atar.
`)
.setFooter(`${message.author.username} tarafından kullanıldı.`, message.author.displayAvatarURL({dynamic:true}))
.setColor("AQUA")

msg.edit({content: "⚙️ Kullanıcı", embeds: [kullanıcı], components: [new MessageActionRow({ components: [buton3]})]})

}

if(button.customId === "bot") {

let bot = new MessageEmbed()
.setAuthor(`${client.user.username}💥 Eğlence Komutları`, client.user.avatarURL())
.setDescription(`> Botun Eğlence komutları hakkında bilgi alırsınız!`)
.addField("・Komutlar ↷",
`
**${prefix}sevgi** Biri ile aranızda ki sevgi yüzdesini öğrenirsiniz.
**${prefix}say** Bota yazı yazdırırsınız.
**${prefix}kiss** Birini öpersiniz :). 
**${prefix}8ball** Sorulara rastgele yanıt verir. 
**${prefix}snake** Yılan oyunu oynarsınız. 

`)
.setFooter(`${message.author.username} tarafından kullanıldı.`, message.author.displayAvatarURL({dynamic:true}))
.setColor("AQUA")

msg.edit({content: "💥 Eğlence", embeds: [bot], components: [new MessageActionRow({ components: [buton3]})]})

}

if(button.customId === "anasayfa") {

msg.edit({content: ":house: Ana Sayfa", embeds: [embed], components: [new MessageActionRow({ components: [buton, buton1, buton2, buton3]})]})

}

button.deferUpdate();
})

collector.on("end", async button => {

msg.edit({content: "Button click Timeout", embeds: [embed], components: [new MessageActionRow({ components: [buton4]})]})

        })
    })
}};