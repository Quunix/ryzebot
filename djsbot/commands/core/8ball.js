 const Discord = require("discord.js");
module.exports = {
    name: '8ball',
    aliases: ['tahminet'],
    utilisation: '{prefix}tahminet',
  async execute(client, message, args) { 
    const soru = args.join(' ')
    if (soru.length < 1) return message.reply('Cevaplamam için herhangi bir şey yazmalısın.');
    let answers = [
            'Kesinlikle evet.',
            'Kesinlikle hayır.',
            'Sen bilirsin.',
            'Belki.',
            'Olumlu görünüyor.',
            `Olumlu görünmüyor.`,
            `Bunu beğendim.`,
            `Bunu beğenmedim.`,
            `Tekrar sor.`,
            `Bence hayır.`,
            `Bence evet.`,
            `Bilmiyorum.`,
            `Belki.`,
            `Karnım aç düşünemiyorum.`,
        ] 
        const BallNumber = Math.floor(Math.random() * answers.length); 
    const discord = new Discord.MessageEmbed()
    .setTitle('Ryze Bot || 8Ball')
    .setDescription(`**Soru :** \n  \`${soru}\` \n **Yanıtım :** \n \`${answers[BallNumber]}\``)
    .setColor('AQUA')
    .setThumbnail(message.author.avatarURL({dynamic: true}))
    .setTimestamp()
    .setFooter(`${message.author.username} tarafından kullanıldı.`, message.author.displayAvatarURL({dynamic:true}))
        
    message.channel.send({embeds : [discord]})

  }}