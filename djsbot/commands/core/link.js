const Discord = require('discord.js');
const shorten = require('isgd');
module.exports = {
    name: 'link',
    aliases: ['kısalt'],
    utilisation: '{prefix}kısalt', 

execute(client, message, args, tools) {
 if (!message.guild) {
  return }    
if (!args[0]) return message.channel.send(`${message.author}, Kısaltmak istediğiniz URL linkini yazınız. ❌`);

    if(!args[1]) {

        shorten.shorten(args[0], function(res) {
            if (res.startsWith('Hata:')) message.channel.send('**Hatalı URL Girildi.**');

        const embed = new Discord.MessageEmbed()
	       .setColor("AQUA")
         .setDescription(`İşte [Link](${res})in! \n\n ${res}`)
         .setTimestamp()
            message.channel.send({embeds : [embed]});
        })
    } else {
        shorten.custom(args[0], args[1], function(res) {

            if (res.startsWith('Hata:')) message.channel.send(`**<${res}>**`);

            message.channel.send(`**<${res}>**`);
        })
    }

}};