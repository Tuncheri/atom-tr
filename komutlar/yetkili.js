const Discord = require('discord.js');

let botid = ('606541058955935787') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} Yetkili Komutları`)
    .addField('-ban', 'Etiketlediğiniz kişiyi banlar.')//ne kadar yetkili komutunuz varsa o kadar .addField('prefix+komut', 'açıklama/kullanım amacı') koyun
    .addField('-mute', 'Etiketlediğiniz kişiyi susturur')
    .addField('-unmute', 'Etiketlediğiniz kişinin susturulmasını kaldırır.')
    .addField('-temizle', 'Belirtilen sayıda yazı siler.')
    .addField('-sunucu-kur', 'Hazır kanallar ve roller oluşturur.')
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
  name: 'yetkili',
  description: '',
  usage: ''
};