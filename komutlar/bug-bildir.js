const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
let bug = args.join(" ").slice(0);
let user = message.author.username;
let guild = message.guild.name;
let guildid = message.guild.id;
let kanal = message.channel.name;
let channel = bot.channels.get("717409145132679193")//bug repot kanal id'i
let embed = new Discord.RichEmbed()
.setTitle("Bug Report")
.setThumbnail("https://cdn.discordapp.com/attachments/717101779371950211/717409596951625871/t-rex-head-gaming-logo-esport_100659-9.jpg")
.addField("Bug", bug)
.addField("Report Eden", user, true)
.addField("Sunucu", guild, true)
.addField("Sunucu ID", guildid, true)
.addField("Kanal", kanal, true)
.setColor("#f49542")

message.channel.send(":white_check_mark:  **| Bug Report Başarı İle İletildi. Gelişmemiz için yardımcı olduğunuz için teşekkürler kullanıcı. `RexWare Bots Tüm Hakları Saklıdır.`**")
channel.send(embed).then(i => i.react("⏳"))

  


}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0  
};

exports.help = {
  name: 'bug-bildir',
  description: 'Çalışıp para kazanırsınız.',
  usage: 'bug-bildir'
}