const Discord = require('discord.js');

var hd = [
    "༻𝓥𝓢𝓣༺ 𝔇𝔦𝔞𝔟𝔩𝔬™#4879",
    "༻𝓥𝓢𝓣༺ 𝔇𝔦𝔞𝔟𝔩𝔬™#4879"
];

module.exports.run = async (bot, message, args) => {

  message.channel.send(message.author.toString() + " Sponsor olmak için bana ulaş! : " + (hd[Math.floor(Math.random() * hd.length)]));
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sponsor-ol',
  description: 'Yazı Tura Oynamanıza Yarar.',
  usage: 'sponsor-ol'
};