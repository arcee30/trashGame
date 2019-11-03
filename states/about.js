var About = function() {};

About.prototype = {

  preload: function() {
    game.load.image('bl_drop', 'assets/img/blueplasticbag.png');
    game.load.image('br_drop', 'assets/img/cardboardbox.png');
    game.load.image('gr_drop', 'assets/img/styrofoam.png');
    game.load.image('1_drop', 'assets/img/meat.png');
    game.load.image('2_drop', 'assets/img/milkjug.png');
    game.load.image('3_drop', 'assets/img/usednapkins.png');



  },

  init: function() {
    this.aboutText = "Trash is a game we created\n to raise awareness about what\n materials go in what bin,\n a critical way the ordinary \nperson can help the environment\ \n."
    this.instructions = "Use your left and right arrow\nkeys to move the bin\nto catch the correct trash (blue) \n and avoid incorrect (brown) ones.\nCollect 15 correct items\n to end the level."
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

    var drop1 = game.add.image(120, y + 360 + 300 + 300, 'bl_drop');
    var drop2 = game.add.image(248, y + 360 + 300 + 300, 'gr_drop');
    var drop3 = game.add.image(376, y + 360 + 300 + 300, 'br_drop');
    var drop4 = game.add.image(575, y + 360 + 300 + 300, '1_drop');
    var drop5 = game.add.image(760, y + 360 + 300 + 300, '2_drop');
    var drop6 = game.add.image(888, y + 360 + 300 + 300, '3_drop');

    var prompt = game.add.text(x, 1920-150, 'press space to continue', {
      font: '48pt Karla-Bold',
      fill: '#404040',
      align: 'center'
    });

    utils.centerGameObjects([title, title2, txt, prompt, inst, drop1, drop2, drop3, drop4, drop5, drop6]);

  },

  update: function() {
    if (game.input.keyboard.isDown(Phaser.KeyCode.SPACEBAR)) {
      game.state.start('preview1');
    }
  }
};
