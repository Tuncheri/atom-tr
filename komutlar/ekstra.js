const Discord = require('discord.js');

let botid = ('') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} Ekstra Komutları`)
    .addField('-ailemiz', 'Botun hangi sunucularda mevcut olduğunu gösterir.')//ne kadar Ekstra komutunuz varsa o kadar .addField('prefix+komut', 'açıklama/kullanım amacı') koyun
    .addField('-davet', 'Botun davet linkini gönderir.')
    .addField('-üyedurum', 'Sunucudaki üyeler hakkında bilgi verir.')
    .addField('-istatistik', 'Botun istatistiğini çıkarır.')
    .addField('-tavsiye', 'Yapımcıya botla ilgili tavsiyede bulunursunuz.')
    
    .addField(`» Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=606541058955935787&scope=bot&permissions=2146958847) **|** [ATOM SUNUCUSU](https://discord.gg/EsSwutX) **|** [Web Sitesi](https://atom-site.glitch.me)`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
    message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'ekstra',
  description: '',
  usage: ''
};