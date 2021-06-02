const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor("RED")
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Yenilikleri DM den gönderdim. :warning:');
    message.channel.sendEmbed(ozelmesajkontrol) }
  const pingozel = new Discord.RichEmbed()
    .setTitle("YENİLİKLER")
  .setAuthor("ATOM | Yenilikler", bot.user.avatarURL)
  .setColor("RANDOM")
  .setDescription("-sor - Bot ile sohbet edersiniz.\n-1v1 - İstediğiniz  kişiyle düello yaparsınız.\n-davet - Botun davet linkini alırsınız.\n-sunucu-kur - Hazır kanallar ve roller oluşturur.\n\n**Eklenmesini İstediginiz Komutları -tavsiye <tavsiyeniz> ile gonderiniz.**")
  .setFooter('ATOM | Beni sunucuna eklemek için -davet | Komut yardım için -yardım', bot.user.avatarURL)
  .setThumbnail(bot.user.avatarURL)
  .setTimestamp()
  .addBlankField(true)
      return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yetki'],
  permLevel: 0
};

exports.help = {
  name: 'yenilikler',
  description: 'Bütün yetkili komutlarını verir.',
  usage: 'yetkili'
};