const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  const Embed = new Discord.RichEmbed()
    .setTimestamp()
    .setAuthor("RexWare", client.user.avatarURL)
    .setColor("BLUE")
    .setTitle("RexWare")
    .setURL(
      "https://discord.com/oauth2/authorize?client_id=715641862647709727&scope=bot&permissions=2146958847****"
    )
   
    .setFooter("© RexWare Bots", client.user.avatarURL);
  message.channel.send(Embed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: "davet",
  description: "Davet Etme Komutu.",
  usage: "!davet"
};
