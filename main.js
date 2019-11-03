var
  game = new Phaser.Game(1080, 1920, Phaser.AUTO, 'game'),
  Main = function () {};

Main.prototype = {
  preload: function () {
    game.load.image('bg', 'assets/img/blue.png');
    game.load.image('loading', 'assets/img/loading.png');
    game.load.image('logo', 'assets/img/trashbinlogo.png');
    game.load.image('logo2', 'assets/img/recyclebinlogo.png');
    game.load.image('logo3', 'assets/img/compostbinlogo.png');
    game.load.script('utils', 'lib/utils.js');
    game.load.script('splash', 'states/Splash.js');
  },

  create: function() {
    game.state.add('Splash', Splash);
    game.state.start('Splash');
  }

};

game.state.add('Main', Main);
game.state.start('Main');
