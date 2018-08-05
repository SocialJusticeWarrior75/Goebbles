const Discord = require('discord.js');
var bot = require('./../bot');


// Informations relative à la commande
var cmdInfo = {
  name : "gaz",
  description : "Gaz un juif gratuitement",
  ignore : false,
  adminOnly : false,
}

//<@&455797010562416640> -> aryen

// La commande en elle même est contenue dans cette fonction
var exec = function(user, channel, args) {
  var member = bot.usefulInfos.handlingGuild.members.get(user.id);
  if(member.roles.find("id", "455797010562416640")) {
    var random = Math.floor(Math.random() * Math.floor(7));
    var resultatsGaz = ["prout","pchit pchit","hop hop hop le juif ne va pas se gazer tout seul","Gaz envoyé","Purification au gaz lancé !","Gazons la zone !","Lancement du gazage !"];
    var personne = "Le juif";

    if(args.length == 2) { personne = args[1]; }
    channel.send(resultatsGaz[random]);
    channel.send(personne + " a été gazé avec succès !");
  } else {
    channel.send("C'est toi qui va te faire gazer si tu continues...");
  }


}

exports.cmdInfo = cmdInfo;
exports.exec = exec;
