const Discord = require('discord.js');
var bot = require('./../bot');


// Informations relative à la commande
var cmdInfo = {
  name : "train",
  description : "Besoin de déporter un juif ?",
  ignore : false,
  adminOnly : false,
}

//<@&455797010562416640> -> aryen

// La commande en elle même est contenue dans cette fonction
var exec = function(user, channel, args) {
  var member = bot.usefulInfos.handlingGuild.members.get(user.id);
  if(member.roles.find("id", "455797010562416640")) {
    var random = Math.floor(Math.random() * Math.floor(4));
    var resultatsDeport = ["Le train va partir !","Terminus tout le monde descend !","Départ du train !","TchouTchou"];
    var personne = "Le juif";

    if(args.length == 2) { personne = args[1]; }
    channel.send(resultatsDeport[random]);
    channel.send(personne + " a été déporté avec succès !");
  } else {
    channel.send("C'est toi qui va te faire déporter si tu continues...");
  }


}

exports.cmdInfo = cmdInfo;
exports.exec = exec;
