var Preview2 = function() {};

Preview2.prototype = {

  create: function() {
    var background = game.add.sprite(0, 0, 'bg');
    this.titleText = game.add.text(game.world.centerX, 480, 'Collect the Recyclables', {
      font: '60pt Karla-Bold',
      fill: '#404040',
      align: 'center'
    });
    this.titleText.anchor.set(0.5);

    var text = "\n\nSort the recycle! \n\n 50% of items that could be \n recycled end up in the landfill \nfrom not putting them\n in the right bin \n\n If you are not sure if an plastic \nitem can be recycled, check\n if it is a number 1 or 2 plastic... \nBoth can be recycled "
    var score_text = game.add.text(game.world.centerX, game.world.centerY, text, {
      font: '48pt Karla',
      fill: '#404040',
      align: 'center'
    });
    score_text.anchor.set(0.5);
  },
  
  update: function() {
    if (game.input.keyboard.isDown(Phaser.KeyCode.SPACEBAR)) {
      drops_collected=0;
      blue_collected=0;
      green_collected=0;
      brown_collected=0;
      game.state.start('game2');
    }
  }
};
