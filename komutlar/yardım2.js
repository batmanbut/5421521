const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  const Embed = new Discord.RichEmbed()
    .setTimestamp()
    .setAuthor("RexWare", client.user.avatarURL)
    .setColor("BLUE")
    .setTitle("RexWare BOT")
    .setURL(
      "https://discord.com/oauth2/authorize?client_id=715641862647709727&scope=bot&permissions=2146958847"
    )
    .setDescription(`Sunucu İstatistiklerini Sunan Bir Botdur.`)

    .addField(
      "!rol-koruma aç/kapat",
      `Rolleriniz bizim güvencemiz altında!`
    )

    
    .addField("!bug-bildir", `Botumuzu geliştirmemiz için bize sorunları bildir!`)
  
    .addField("!boks-makinesi", `Güç testi!`)

    .addField("!ateşle", `Rus Ruleti oyna!`)

    .addField("!türk", `Ne mutlu Türküm Diyene!`)

    .addField("!sponsor-ol", `Botumuza sponsor olmak için ulaş!`)
   
    .addField("!fakemesaj @biri", `Sahte mesaj yollar!`)

    .addField("DDOS PROTECT", `DDOS yediğiniz an sunucunuzun adresini değiştiriyoruz!`)

    .addField("Anti BOT", `Hiç bir bot'u sokamazlar!`)
  
    .addField("Anti Raid", `Silinen odaları geri getiriyorum!`)

    .addField("Anti Spam", `Yiyorsa spam yapsınlar!`)

    .addField("RexWare Bots", `Size Kaliteli bir hizmet sunuyoruz!`)
  
    .setFooter("© RexWare Bots", client.user.avatarURL);
  
  message.channel.send(Embed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım", "help", "h", "help"],
  permLevel: 0
};

module.exports.help = {
  name: "yardım2",
  description: "Yardım Menüsü",
  usage: "!yardım2"
};
