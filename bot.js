const Discord = require('discord.js');
const bot = new Discord.Client();
const token = "NDc1Mzg0NjI1NDE4NzMxNTIw.DkeQFA.odXvZnajM0x49WZYmTAaprzov2k";
const prefix = "**";

// ROLE GROS PORC 463404030979473438
// MESSAGE REAC GROS PORC 463644246952378371
// Récupère des modules du bot
var commands = require('./commands/commands');
var tools = require('./tools')
var usefulInfos = {};

bot.on('ready', () => {
    console.log("[INFO] Connecté");
    // Informations comme id des channels, etc
    usefulInfos.handlingGuild = bot.guilds.get('211122367978668034');
    usefulInfos.welcomeChannel = usefulInfos.handlingGuild.channels.get('211125565246144512');
    //usefulInfos.roleChannel = usefulInfos.handlingGuild.channels.get('463407796298317835');
    usefulInfos.logsChannel = usefulInfos.handlingGuild.channels.get('455784603614052352');
    usefulInfos.defaultRole = usefulInfos.handlingGuild.roles.get('455747205484118037');

    bot.user.setActivity("des juifs expérimentaux suffoquer", {type: 'WATCHING'});
    //awaiter.waitReactionsFor('463420184493948948', usefulInfos.roleChannel);
});

/*bot.on('guildMemberAdd', gMember => {
    console.log("[INFO] [MEMBER] New member: " + gMember.user.username);
    //<:fiert:474721060726767616>
    usefulInfos.welcomeChannel.send(`<:fiert:474721060726767616> Bienvenue dans notre camp suprématiste <@` + gMember.id  + `> <:fiert:474721060726767616>
      Nous avons un règlement strict pour les sous-races juives de ton genre,
      consulte les dans le <#455793991233830944>

      Le <@&211123031936860161> s'occupera de toi,
      en attendant, reste sage youpin.
      `)

    tools.addRoleTo(gMember.user, usefulInfos.defaultRole, "default role", gMember);
});*/

/*
bot.on('guildMemberRemove', gMember => {

    usefulInfos.welcomeChannel.send("*" + gMember.user.username + "#" + gMember.user.discriminator + "* viens de s'échapper ! <:aaaaa:461285191428603905> \nRATTRAPEZ LE ! SCHNELL SCHNELL !!!")

    console.log("[INFO] [MEMBER] Member left: " + gMember.user.username);
});*/

/*
bot.on('messageDelete', message => {
  if(!message.author.bot) {
    const embedDelete = new Discord.RichEmbed()
    .setTitle("Message deleted in #" + message.channel.name)
    .setAuthor(message.author.username + "#" + message.author.discriminator)
    .setColor("#FF0000")
    .setDescription(message.content)
    .setThumbnail(message.author.avatarURL);

    usefulInfos.logsChannel.send(embedDelete);
  }
});
bot.on('messageUpdate', (oldMessage, newMessage) => {
  if(!newMessage.author.bot) {
    const embedEdit = new Discord.RichEmbed()
    .setTitle("Message edited in #" + newMessage.channel.name)
    .setAuthor(newMessage.author.username + "#" + newMessage.author.discriminator)
    .setColor("#3399FF")
    .addField("Old message", oldMessage, true)
    .addField("New message", newMessage, true)
    .setThumbnail(newMessage.author.avatarURL);

    usefulInfos.logsChannel.send(embedEdit);
  }
});*/

bot.on('raw', async function(event) {
});

var msgDeFilsDePute = function(message) {
  for (var i = 0; i < cancerousLinks.length; i++) {
    if (message.content.includes(cancerousLinks[i])) {
      console.log("[INFO] [FDP] Message from " + message.author.username + "#" + message.author.discriminator + " was deleted because it contained cancerous link: " + cancerousLinks[i] + " and he got banned");
      message.delete();
      message.member.ban({reason: "Cancerous link"})
      break;
    }
  }
}

// C'est ici que sont gérées les commandes
bot.on('message', message => {

  tools.xp(message.author);


  var cmdList = commands.cmdList;
  var cmdLen = Object.keys(cmdList).length;
  var args = message.content.split(" ");
  // Une boucle for pour traverser toutes les commandes ...
  for(var i = 0; i < cmdLen; i++) {
    // ... afin de toutes les comparer au message !

    // check les droits admins
    if(cmdList[i].cmdInfo.adminOnly == true && !message.author.id == "470266927462350858") {
      console.log("yameroo");
    } else {
      if(args[0] == prefix + cmdList[i].cmdInfo.name) {
          // On exécute la commande
          cmdList[i].exec(message.member, message.channel, args);
        }
      }
  }
});

exports.bot = bot
exports.usefulInfos = usefulInfos


// Allume le bot
bot.login(token);
