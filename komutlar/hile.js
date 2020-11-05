const Discord = require('discord.js');

var hd = [
    "⌭",
    "⌭"
];

module.exports.run = async (bot, message, args) => {

  message.channel.send(message.author.toString() + " **Sunucu Tag'ımız** : " + (hd[Math.floor(Math.random() * hd.length)]));
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'tagal',
  description: 'Yazı Tura Oynamanıza Yarar.',
  usage: 'tagal'
};