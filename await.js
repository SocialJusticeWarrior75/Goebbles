var bot = require('./bot');
//✔️

const filter = (reaction, user) => {
    return ['✔️'].includes(reaction.emoji.name);
};

exports.waitReactionsFor = async (messageid, roleChannel) => {
  var Message = await roleChannel.fetchMessage(messageid);
  Message.awaitReactions(filter).then
  console.log(Message.content);
}
