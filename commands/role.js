const Discord = require('discord.js');
var bot = require('./../bot');
var commands = require('./commands');
var tools = require('./../tools');

// Informations relative à la commande
var cmdInfo = {
  name : "role",
  description : "Définis ton rôle [juif, asociaux, homosexuel, jehovah, politique, tsigane]",
  ignore : false,
  adminOnly : false,
}

/*

<@&455815142685409281> Jéhovah
<@&455795852624134147> Politique
<@&455796862587371524> Criminel
<@&455795530648518688> Asociaux
<@&455744686775074817> Homosexuel
<@&455795404848627722> Tsigane

*/

// La commande en elle même est contenue dans cette fonction
var exec = function(user, channel, args) {
  var member = bot.usefulInfos.handlingGuild.members.get(user.id);

  if(member.roles.find("id", "455797010562416640")) {
    channel.send("Pas besoin de cette commande pour toi, ça sert \"aryen\" !");
  } else {
    switch (args[1]) {
      case 'asociaux':
        tools.removeTriangles(user);
        tools.addRoleTo(user, bot.usefulInfos.handlingGuild.roles.get('455795530648518688'), " changement de triangle", member);
        channel.send("Tu a maintenant un triangle d'Asociaux <:trianglenoir:455808398676590592>");
        break;
      case 'homosexuel':
        tools.removeTriangles(user);
        tools.addRoleTo(user, bot.usefulInfos.handlingGuild.roles.get('455744686775074817'), " changement de triangle", member);
        channel.send("Tu a maintenant un triangle de d'Homosexuel <:trianglerose:455808536878776350>");
        break;
      case 'criminel':
        tools.removeTriangles(user);
        tools.addRoleTo(user, bot.usefulInfos.handlingGuild.roles.get('455796862587371524'), " changement de triangle", member);
        channel.send("Tu a maintenant un triangle de Criminel <:trianglevert:456482271289933834>");
        break;
      case 'jehovah':
        tools.removeTriangles(user);
        tools.addRoleTo(user, bot.usefulInfos.handlingGuild.roles.get('455815142685409281'), " changement de triangle", member);
        channel.send("Tu a maintenant un triangle de Témoin de Jéhovah <:triangleviolet:455851560270954506>");
        break;
      case 'politique':
        tools.removeTriangles(user);
        tools.addRoleTo(user, bot.usefulInfos.handlingGuild.roles.get('455795852624134147'), " changement de triangle", member);
        channel.send("Tu a maintenant un triangle de Politique <:trianglerouge:455808477160407061>");
        break;
      case 'tsigane':
        tools.removeTriangles(user);
        tools.addRoleTo(user, bot.usefulInfos.handlingGuild.roles.get('455795404848627722'), " changement de triangle", member);
        channel.send("Tu a maintenant un triangle de Tsigane <:trianglemarron:455808589723074580>");
        break;
      case 'juif':
        tools.removeTriangles(user);
        channel.send("Un juif, hein... ça me rebute 😒");
        break;
      default:
        channel.send("`*role [juif, asociaux, homosexuel, jehovah, politique, tsigane, criminel]`");
    }
  }

}

exports.cmdInfo = cmdInfo;
exports.exec = exec;
