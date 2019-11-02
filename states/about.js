var About = function() {};

About.prototype = {

  preload: function() {
    game.load.image('bl_drop', 'assets/img/trash_blue.jpg');
    game.load.image('br_drop', 'assets/img/trash_brown.png');
    game.load.image('gr_drop', 'assets/img/trash_green.png');
  },

  init: function() {
    this.aboutText = "Trash is a game we created\nto raise awareness about the\n.\n\n"
    this.instructions = "Use your left and right arrow\nkeys to move the bin\nto catch the correct trash (blue0 \n and avoid incorrect (brown) ones.\nCollect 15 correct items to end the level."
  },

  create: function () {
    game.stage.disableVisibilityChange = true;
    game.add.sprite(0, 0, 'bg');

    var x = game.world.centerX;
    var y = 600;

    var title = game.add.text(game.world.centerX, 200, 'about Trash Sort', {
      font: '80pt Karla-Bold',
      fill: '#404040',
      align: 'center'
    });

    var txt = game.add.text(x, y, this.aboutText, {
      font: '48pt Karla',
      fill: '#404040',
      align: 'center'
    });

    var title2 = game.add.text(game.world.centerX, y+360, 'instructions', {
      font: '80pt Karla-Bold',
      fill: '#404040',
      align: 'center'
    });

    var inst = game.add.text(x, y+360+300, this.instructions, {
      font: '48pt Karla',
      fill: '#404040',
      align: 'center'
    });

    var drop1 = game.add.image(x-150, y+360+300+300, 'bl_drop');
    var drop2 = game.add.image(x-50, y+360+300+300, 'gr_drop');
    var drop3 = game.add.image(x+150, y+360+300+300, 'br_drop');

    var prompt = game.add.text(x, 1920-150, 'press space to continue', {
      font: '48pt Karla-Bold',
      fill: '#404040',
      align: 'center'
    });

    utils.centerGameObjects([title, title2, txt, prompt, inst, drop1, drop2, drop3]);
  },

  update: function() {
    if (game.input.keyboard.isDown(Phaser.KeyCode.SPACEBAR)) {
      game.state.start('preview1');
    }
  }
};
