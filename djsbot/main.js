const { Player } = require('discord-player')
const { Intents, Client } = require('discord.js')
const config = require('./config.js')
const Discord = require('discord.js')

global.client = new Client({
    partials: ["CHANNEL"],
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES,
        Intents.FLAGS.GUILD_PRESENCES,
    
    ],
    disableMentions: 'everyone',
});


global.client.config = require('./config');


global.player = new Player(global.client, global.client.config.opt.discordPlayer);

require('./src/loader');
require('./src/events');


global.client.on('message', msg => {
const yanıt = new Discord.MessageEmbed()
.setDescription(`***Merhaba!***, ${msg.author} \n\n Prefixim : **${config.px}** \n\n Davet etmek için : [Tıkla](https://discord.com/oauth2/authorize?client_id=935257372526510092&scope=bot&permissions=305146897) `)
.setColor('AQUA');

    if (msg.content === `<@935257372526510092>`) {
      msg.reply({embeds : [yanıt]})
    }
  })

global.client.login(config.token)
