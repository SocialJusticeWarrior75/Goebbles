const Discord = require('discord.js');
var bot = require('./../bot');
var commands = require('./commands');

// Informations relative à la commande
var cmdInfo = {
  name : "help",
  description : "La commande d'aide que tu viens de lancer. Basique.",
  ignore : false,
  adminOnly : false,
}

// La commande en elle même est contenue dans cette fonction
var exec = function(user, channel, args) {
  var cmdList = commands.cmdList;
  var cmdLen = Object.keys(cmdList).length;

  const embed = new Discord.RichEmbed()
  .setTitle("J'suis le ministre de la propagandes\r\n\r\n" + "Voici mes commandes:\r\n")
  .setDescription("")
  //.setAuthor(newMessage.author.username + "#" + author.discriminator)
  .setColor("#BFBFBF")
  .setThumbnail(bot.bot.user.avatarURL);

  // Comme dans bot.js, on traverse toutes les commandes à l'aide du boucle for ...
  for(var i = 0; i < cmdLen; i++) {
    if(!cmdList[i].cmdInfo.ignore)
      {
        // ... pour ajouter une entrée au message
        embed.addField(cmdList[i].cmdInfo.name, cmdList[i].cmdInfo.description)
      }
  }

  // Et on envoi le message
  channel.send(embed);
}

exports.cmdInfo = cmdInfo;
exports.exec = exec;
