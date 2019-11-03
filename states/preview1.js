var Preview1 = function() {};

Preview1.prototype = {

  create: function() {
    var background = game.add.sprite(0, 0, 'bg');
    this.titleText = game.add.text(game.world.centerX, 480, 'Collect the Trash', {
      "font": '60pt Karla-Bold',
      "fill": '#404040',
      "align": 'center'
    });
    this.titleText.anchor.set(0.5);
    var text = "\n\nSort the trash! \n\n Did you know the average \n person generates 4 pounds\n of trash a day? \n \nAlmost 20% of landfills \n are compostable foods\ \n.\n\n"
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
      game.state.start('game1');
    }
  }
};
