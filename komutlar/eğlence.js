const Discord = require('discord.js');

let botid = ('') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} Eğlence Komutları`)
    .addField('-1vs1', 'Etiketlediğiniz kişi ile düello yaparsınız.')//ne kadar eğlence komutunuz varsa o kadar .addField('prefix+komut', 'açıklama/kullanım amacı') koyun
    .addField('-8ball', 'Sorduğunuz soruya evet/hayır şeklinde cevap verir.')
    .addField('-emojiyazı', 'Yazdığınız yazıyı emojili olarak yazar.')
    .addField('-espri', 'Espri yapar.')
    .addField('-fal', 'Fal bakar.')
    .addField('-opendoor', 'FBI OPEN THE DOOR !')
    .addField('-kaçcm', 'Anladınız siz :)')
    .addField('-pixel', 'Profil fotoğrafınızı pixelleştirir.')
    .addField('-rastgeleşifre', '8 harflik rastgele şifre oluşturur.')
    .addField('-saat', 'Türkiye saatini gösterir.')
    .addField('-wasted', 'Profil fotoğrafınıza WASTED yazısı ekler.')
    .addField('-banner', 'Yazdığınız yazıyı banner yapar.')
    .addField('-nahçek', 'İstediğiniz kişiye NAH çeker.')
    .addField('-kasaaç', 'CS GO Kasası açarsınız.')
    .addField('-sor', 'Bot ile sohbet edersiniz.')
    .addField('-boks-makinesi', 'Boks makinesine vurursunuz.')
    
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
  name: 'eğlence',
  description: '',
  usage: ''
};