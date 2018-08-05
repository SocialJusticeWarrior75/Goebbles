const Discord = require('discord.js');
var bot = require('./../bot');


// Informations relative à la commande
var cmdInfo = {
  name : "fusiller",
  description : "Fusil un juif gratuitement",
  ignore : false,
  adminOnly : false,
}

// La commande en elle même est contenue dans cette fonction
var exec = function(user, channel, args) {


  var member = bot.usefulInfos.handlingGuild.members.get(user.id);
  if(member.roles.find("id", "455797010562416640")) {
    var random = Math.floor(Math.random() * Math.floor(3));
    var resultatsFusils = ["Abattez ces youpins !","Tirez à vue !","Fusillez ces juifs !"];
    var personne = "Le juif";

    if(args.length == 2) { personne = args[1]; }
    channel.send(resultatsFusils[random]);
    channel.send(args[1] + " a été fusillé avec succès !");
  } else {
    channel.send("C'est toi qui va te faire fusiller si tu continues...");
  }
}

exports.cmdInfo = cmdInfo;
exports.exec = exec;
