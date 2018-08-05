const Discord = require('discord.js');
var bot = require('./../bot');

var resultatsExperience = ["Un Juif avec une tête de chien !","Un Chien avec une tête de juif !","Un Juif Généreux !","Un Macaque avec des jambes de Juifs !","Un juif avec un petit nez !","Un juif Négationniste !","Un juif avec cinq bras !","Un juif musulman !","Un Juif avec le corps d'un Koala !","Un Tyrannosaure avec un nez de Juif !","Un juif avec une bite sur le front !","Un tsigane humain !","Un homosexuel virile !"];

// Informations relative à la commande
var cmdInfo = {
  name : "heil",
  description : "Saluez le 3e Reich avec honneur !",
  ignore : false,
  adminOnly : false,
}

// La commande en elle même est contenue dans cette fonction
var exec = function(user, channel, args) {
  var random = Math.floor(Math.random() * Math.floor(13));
  channel.send("SIEG HEIL <:heil:455863509260173332>");

}

exports.cmdInfo = cmdInfo;
exports.exec = exec;
