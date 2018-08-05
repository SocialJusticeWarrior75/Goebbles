// On liste les commandes dans un Objet, pour faciliter la traverse des cmd
var listOfCmd = {
  0 : require('./help'),
  1 : require('./server'),
  2 : require('./delete'),
  3 : require('./role'),
  4 : require('./medecine'),
  5 : require('./heil'),
  6 : require('./gaz'),
  7 : require('./fusiller'),
  8 : require('./train'),
};

exports.cmdList = listOfCmd;
