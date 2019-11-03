var Sources = function() {};

Sources.prototype = {

  preload: function() {
    game.load.image('bl_drop', 'assets/img/blueplasticbag.png');
    game.load.image('br_drop', 'assets/img/cardboardbox.png');
    game.load.image('gr_drop', 'assets/img/trash_green.png');
    game.load.image('1_drop', 'assets/img/meat.png');
    game.load.image('2_drop', 'assets/img/milkjug.png');
    game.load.image('3_drop', 'assets/img/usednapkins.png');
  },

  init: function() {
    this.aboutText = "\n \n \n \n \n \n \nThe levels got harder\n because you\nprogressed through\nthe game."
  },

  create: function () {
    game.stage.disableVisibilityChange = true;
    game.add.sprite(0, 0, 'bg');

    var x = game.world.centerX;
    var y = 600;

    var title = game.add.text(game.world.centerX, 200, 'Thanks for playing!', {
      font: '80pt Karla-Bold',
      fill: '#404040',
      align: 'center'
    });

    var subtitle = game.add.text(x, y - 200, 'Did you notice...', {
      font: '70pt Karla',
      fill: '#404040',
      align: 'center'
    });

    var txt = game.add.text(x, y, this.aboutText, {
      font: '70pt Karla',
      fill: '#404040',
      align: 'center'
    });


    var drop1 = game.add.image(120, y + 360 + 300 + 300, 'bl_drop');
    var drop2 = game.add.image(248, y + 360 + 300 + 300, 'gr_drop');
    var drop3 = game.add.image(376, y + 360 + 300 + 300, 'br_drop');
    var drop4 = game.add.image(575, y + 360 + 300 + 300, '1_drop');
    var drop5 = game.add.image(760, y + 360 + 300 + 300, '2_drop');
    var drop6 = game.add.image(888, y + 360 + 300 + 300, '3_drop');

    var prompt = game.add.text(x, 1920-150, 'press space to play again', {
      font: '48pt Karla-Bold',
      fill: '#404040',
      align: 'center'
    });

    utils.centerGameObjects([title, subtitle, txt, prompt, drop1, drop2, drop3, drop4, drop5, drop6]);
  },

  update: function() {
    if (game.input.keyboard.isDown(Phaser.KeyCode.SPACEBAR)) {
      game.state.start('preview1');
    }
  }
};
