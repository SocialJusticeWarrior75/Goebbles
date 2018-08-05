var bot = require('./bot');

var removeRoleTo = function(user, role, reason, member) {
  console.log("[INFO] [ROLES] Remove " + user.username + " the role " + role.name + " because: " + reason);
  member.removeRole(role, reason);
}

var addRoleTo = function(user, role, reason, member) {
  console.log("[INFO] [ROLES] Add " + user.username + " the role " + role.name + " because: " + reason);
  member.addRole(role, reason);
}
/*

<@&455815142685409281> Jéhovah
<@&455795852624134147> Politique
<@&455796862587371524> Criminel
<@&455795530648518688> Asociaux
<@&455744686775074817> Homosexuel
<@&455795404848627722> Tsigane

*/


var removeTriangles = function(user) {
  var member = bot.usefulInfos.handlingGuild.members.get(user.id);
  removeRoleTo(user, bot.usefulInfos.handlingGuild.roles.get('455815142685409281'), "changement de triangle ou passage en juif normal", member);
  removeRoleTo(user, bot.usefulInfos.handlingGuild.roles.get('455795852624134147'), "changement de triangle ou passage en juif normal", member);
  removeRoleTo(user, bot.usefulInfos.handlingGuild.roles.get('455796862587371524'), "changement de triangle ou passage en juif normal", member);
  removeRoleTo(user, bot.usefulInfos.handlingGuild.roles.get('455795530648518688'), "changement de triangle ou passage en juif normal", member);
  removeRoleTo(user, bot.usefulInfos.handlingGuild.roles.get('455744686775074817'), "changement de triangle ou passage en juif normal", member);
  removeRoleTo(user, bot.usefulInfos.handlingGuild.roles.get('455795404848627722'), "changement de triangle ou passage en juif normal", member);
}

var xp = function(user) {

}

exports.addRoleTo = addRoleTo;
exports.removeRoleTo = removeRoleTo;
exports.removeTriangles = removeTriangles;
exports.xp = xp;
