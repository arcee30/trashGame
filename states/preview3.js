var Preview3 = function() {};

Preview3.prototype = {

	create: function() {
		var background = game.add.sprite(0, 0, 'bg');
        this.titleText = game.add.text(game.world.centerX, 480, 'Collect the Compost', {
			font: '60pt Karla-Bold',
			fill: '#404040',
			align: 'center'
		});
		this.titleText.anchor.set(0.5);

        var text = "\n\nSort the compostables! \n 24% of compost items end \n up in landfills or other places\n \n If you're worried about maggots \n and other creatures hanging around \n your compost, put a lid on it! \n"
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
      game.state.start('game3');
    }
  }
};
