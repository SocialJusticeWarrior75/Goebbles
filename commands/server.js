const Discord = require('discord.js');
var bot = require('./../bot');


// Informations relative à la commande
var cmdInfo = {
  name : "server",
  description : "Permet de récupérer des informations",
  ignore : false,
  adminOnly : false,
}

// La commande en elle même est contenue dans cette fonction
var exec = function(user, channel, args) {
  var guild = bot.usefulInfos.handlingGuild
  var date = new Date(guild.createdTimestamp)
  var months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]


  console.log("[INFO] Server info gathered");
  const embedInfo = new Discord.RichEmbed()
  .setTitle("Rassismus-Lager")
  .setColor("#CD1125")
  .addField("Membres", "Il y a actuellement " + guild.memberCount + " membres", true)
  .addField("Owner", "NiceParadise", true)
  .addField("Date de création", "Créé le " + date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear(), true)
  .addField("Region", guild.region, true)
  .setThumbnail(guild.iconURL);

  channel.send(embedInfo);
}

exports.cmdInfo = cmdInfo;
exports.exec = exec;
