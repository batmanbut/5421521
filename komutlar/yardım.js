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

    .addField("!top10", `sunucunuzun sıralaması!`)
  
    .addField("!ban", `İstediğin kişiyi banla![!unban id/toplu(Yapmazsan birdaha sunucuya giremez!)]!`)

    .addField("!davet", `RexWare Botunu Davet Edebilirsiniz!`)

    .addField("!1vs1", `Arkadaşlarınla kapış!`)

    .addField("!davet", `RexWare Botunu Davet Edebilirsiniz!`)
  
    .addField("!atasözü", `Rastgele atasözü!`)
    
    .addField("!aşkımı-ölç", `Aşkını ölç!`)
  
    .addField("!canlıdestek", `Yardım istiyorsanız yazınız!`)

    .addField("!sunucu-kur", `Sunucunuzu ve Rollerinizi kurar!`)

    .addField("!söv @biri", `Kendinizi yormayın!`)

    .addField("!temizle", `İstediğiniz kadar mesajı siler!`)
  
    .addField("!fbi", `Fbi Open The Door!`)

    .addField("!zula-deste-aç", `Zula'da deste aç!`)
  
    .addField("!kasaaç", `CS:GO'da kasa aç!`)
    
    .addField("!yardım2", `Yardım 2'ye gider!`)

  
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
  name: "yardım",
  description: "Yardım Menüsü",
  usage: "!yardım"
};
