var path = require('path');
var soundPlayer = require('play-sound')((opts = {}));

function BennyHillPlugin() {};

BennyHillPlugin.prototype.apply = function(compiler) {
  var sound;
  compiler.plugin('compile', function() {
    var bennyHillFile = path.join(__dirname, 'bennyhill.mp3');
    sound = soundPlayer.play(bennyHillFile);
  });
  compiler.plugin('done', function() {
    sound.kill();
  });
};

module.exports = BennyHillPlugin;
