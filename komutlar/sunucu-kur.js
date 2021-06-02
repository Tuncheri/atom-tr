const Discord = require('discord.js');


exports.run = (client, message, args) => {
    message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Gelişmiş Sunucu Kurma').setDescription('Sunucu Yeniden Kurulsunmu?.').setFooter('Onaylıyorsan "evet" yazman yeterlidir.\n30 saniye sonra sona erecek!'))
.then(() => {
message.channel.awaitMessages(response => response.content === 'evet', {
max: 1,
time: 30000,
errors: ['time'],
})
.then((collected) => {
        var server = message.guild;
        for (var i = 0; i < server.channels.array().length; i++) {
        server.channels.array()[i].delete();
        }
        let category = server.channels.find(c => c.name == "Text Channels" && c.type == "category"),
        channel = server.channels.find(c => c.name == "general" && c.type == "text");

        if (category && channel) channel.setParent(category.id);
        else console.error(`One of the channels is missing:\nCategory: ${!!category}\nChannel: ${!!channel}`);
        server.createChannel("📍 Bilgilendirme 📍", "category");
        server.createChannel("🔥 hoşgeldiniz", "text")
    .then(channel => {
    let category = server.channels.find(c => c.name == "📍 Bilgilendirme 📍" && c.type == "category");

    if (!category) throw new Error("Category channel does not exist");
    channel.setParent(category.id);
  }).catch(console.error);
          server.createChannel("📢 duyurular", "text")
    .then(channel => {
    let category = server.channels.find(c => c.name == "📍 Bilgilendirme 📍" && c.type == "category");

    if (!category) throw new Error("Category channel does not exist");
    channel.setParent(category.id);
  }).catch(console.error);
          server.createChannel("📄 kurallar", "text")
    .then(channel => {
    let category = server.channels.find(c => c.name == "📍 Bilgilendirme 📍" && c.type == "category");

    if (!category) throw new Error("Category channel does not exist");
    channel.setParent(category.id);
  }).catch(console.error);

  server.createChannel("📍 METİN KANALLARI 📍", "category");
    server.createChannel("💬 sohbet", "text")
  .then(channel => {
    let category = server.channels.find(c => c.name == "📍 METİN KANALLARI 📍" && c.type == "category");

    if (!category) throw new Error("Category channel does not exist");
    channel.setParent(category.id);
  }).catch(console.error);
      server.createChannel("🤖 bot komut", "text")
  .then(channel => {
    let category = server.channels.find(c => c.name == "📍 METİN KANALLARI 📍" && c.type == "category");

    if (!category) throw new Error("Category channel does not exist");
    channel.setParent(category.id);
  }).catch(console.error);
      server.createChannel("🔰 öneri", "text")
  .then(channel => {
    let category = server.channels.find(c => c.name == "📍 METİN KANALLARI 📍" && c.type == "category");

    if (!category) throw new Error("Category channel does not exist");
    channel.setParent(category.id);
  }).catch(console.error);
      server.createChannel("🛑 şikayet", "text")
  .then(channel => {
    let category = server.channels.find(c => c.name == "📍 METİN KANALLARI 📍" && c.type == "category");

    if (!category) throw new Error("Category channel does not exist");
    channel.setParent(category.id);
  }).catch(console.error);
      server.createChannel("⏰ sayaç", "text").then(channel => {let category = server.channels.find(c => c.name == "📍 METİN KANALLARI 📍" && c.type == "category");

  if (!category) throw new Error("Category channel does not exist");
    channel.setParent(category.id);
  }).catch(console.error);

        server.createChannel("📥 giriş-çıkış", "text").then(channel => {
    let category = server.channels.find(c => c.name == "📍 METİN KANALLARI 📍" && c.type == "category");

    if (!category) throw new Error("Category channel does not exist");
    channel.setParent(category.id);
  }).catch(console.error);
  
          server.createChannel("💯 Level", "text").then(channel => {
    let category = server.channels.find(c => c.name == "📍 METİN KANALLARI 📍" && c.type == "category");

    if (!category) throw new Error("Category channel does not exist");
    channel.setParent(category.id);
  }).catch(console.error);
  
      server.createChannel("AFK VE MÜZİK", "category");
       server.createChannel("🎶-müzik-komutlar  ", "text")
  .then(channel => {
    let category = server.channels.find(c => c.name == "AFK VE MÜZİK" && c.type == "category");

    if (!category) throw new Error("Category channel does not exist");
    channel.setParent(category.id);
  }).catch(console.error);
       server.createChannel("🎶-Müzik Odası", "voice")
  .then(channel => {
    let category = server.channels.find(c => c.name == "AFK VE MÜZİK" && c.type == "category");

    if (!category) throw new Error("Category channel does not exist");
    channel.setParent(category.id);
  }).catch(console.error);
         server.createChannel("💤-AFK Odası", "voice").then(channel => {
    let category = server.channels.find(c => c.name == "AFK VE MÜZİK" && c.type == "category");

    if (!category) throw new Error("Category channel does not exist");
    channel.setParent(category.id);
  }).catch(console.error);
  
         message.guild.createRole({ name: 'Kurucu', position: 50, permissions: ['MANAGE_MESSAGES', 'MANAGE_ROLES'], color: 'BLACK'})
      
      message.guild.createRole({ name: 'Yetkili', position: 20, permissions: ['MANAGE_MESSAGES', 'MANAGE_ROLES'], color: 'PURPLE'})
      
      message.guild.createRole({ name: 'Admin', position: 30, permissions: ['MANAGE_MESSAGES', 'MANAGE_ROLES'], color: 'RED'})
        
      message.guild.createRole({ name: 'Üye', position: 20, permissions: ['MANAGE_MESSAGES'], color: 'GRAY'})
      
      message.guild.createRole({ name: 'Kayıtsız Üye', position: 20, permissions: ['MANAGE_MESSAGES'], color: 'GREEN'})
        
     message.guild.createRole({ name: 'BOT', position: 20, permissions: ['MANAGE_MESSAGES', 'MANAGE_ROLES'], color: 'BLUE'})         
        //İstediğiniz Kadar Kopyala Yapıştır Şeklinde Çoğaltabilirsiniz
        message.channel.send(':white_check_mark: **Roller Kuruldu**');
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
        message.channel.send(`Gerekli Herşey Oluşturuldu`);
    });
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'sunucu-kur',
  description: 'Forumda Watsona Oy Vermeyi Unutmayın.',
  usage: '-sunucu-kur'
};

