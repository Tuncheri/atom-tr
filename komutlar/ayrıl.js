const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
const  tik  = client.emojis.get('700418960239362158')
const hyr = client.emojis.get('683592842924261415')

  if (message.author.id !== ayarlar.sahip) return message.reply(`Yapımcım Sen Değilsin ${hyr} `);
   message.channel.send(`  **Bot Sunucudan Ayrıldı** ${tik}`);
   message.guild.leave()
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ayrıl'],
  permLevel: 4,
  kategori: "yapımcı"
};

exports.help = {
  name: 'ayrıl',
  description: 'Bot Sunucudan Ayrılır.',
  usage: 'ayrıl'
};