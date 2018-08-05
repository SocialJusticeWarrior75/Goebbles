var bot = require('./../bot');
var commands = require('./commands');

// Informations relative à la commande
var cmdInfo = {
  name : "delete",
  description : "[ADMIN ONLY] Supprimes des messages",
  ignore : false,
  adminOnly : true,
}

// La commande en elle même est contenue dans cette fonction
var exec = async function(user, channel, args) {
  if(args.length == 2) {
    var reqNumber = args[1];
    channel.bulkDelete(reqNumber);

    await console.log("[INFO] Deleted " + reqNumber + " messages in #" + channel.name + " requested by " + user.user.username + "#" + user.user.discriminator);
  } else {
    channel.send("Usage: `!delete <number>`");
  }
}

exports.cmdInfo = cmdInfo;
exports.exec = exec;
