const Discord = require('discord.js');

let botid = ('') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} Genel Komutlar`)
    //ne kadar kullanıcı komutunuz varsa o kadar .addField('prefix+komut', 'açıklama/kullanım amacı') koyun
    .addField('-afk', 'Durumunuzu afk olarak ayarlar.')
    .addField('-avatar', 'Profil fotoğrafınızı gönderir.')
    .addField('-servericon', 'Sunucunun profil fotoğrafını gönderir.')  
    .addField('-spotify', 'Belirtilen kullanıcının dinlediği şarkı hakkında bilgi gönderir.')
    .addField('-youtube', 'Arama sonucunda bulunan videoları gönderir.')
    .addField('-steamfiyat', 'Belirttiğiniz oyunun fiyatı ve oyun hakkındaki diğer bilgileri gönderir.')
    .addField('-havadurumu', 'Belirttiğiniz şehrin hava durumu hakkında bilgi verir.')
    .addField(`» Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=606541058955935787&scope=bot&permissions=2146958847) **|** [ATOM SUNUCUSU](https://discord.gg/EsSwutX) **|** [Web Sitesi](https://atomsunucu.blogspot.com/)`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
    message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'genel',
  description: '',
  usage: ''
};