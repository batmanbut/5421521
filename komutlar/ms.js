const Discord = require('discord.js');
const ayarlar = require("../ayarlar.json")
var db = require("quick.db");

exports.run = function(client, message, embed, params) {
    let prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix 
  const bymayfe = new Discord.RichEmbed()
  .setTitle("Ping Değerim")
  .setDescription('şuan')
  .setColor('RANDOM')
      .setThumbnail(message.author.avatarURL)
  .addField('Pingim ```'+ client.ping +"``` !","**Performansım Hasıl Sizce Hız Testim İçin ||" + prefix + "speedtest||**");
    message.channel.send(bymayfe);

};   

   

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['p', 'ms'],
  permLevel: 0 
};

exports.help = {
  name: 'ping', 
  description: 'Botun pingini gösterir',
  usage: 'ping'
};