var Game3 = function() {};

Game3.prototype = {
    preload: function() {
        game.load.image('bl_drop', 'assets/img/drops_blue.png');
        game.load.image('br_drop', 'assets/img/drops_brown.png');
        game.load.image('gr_drop', 'assets/img/drops_green.png');
        game.load.image('bucket', 'assets/img/buckets_empty.png');

        game.load.image('back_1', 'assets/img/backgrounds_boston.png');
        game.load.image('back_2', 'assets/img/backgrounds_charleston.png');
        game.load.image('back_3', 'assets/img/backgrounds_sebring.png');
    },

    init: function() {
        var cursors;
        var bucket;
        var drop_speed;
        var dropTime;
        var drop_x;
        var drop_pos;
        var bucket_velocity;
        this.bucket_scale = 0.8;

        this.blue_collected = 0;
        this.green_collected = 0;
        this.brown_collected = 0;
        this.drops_collected = 0;

    },

    /**
    We were "running out" of drops after awhile not because of the ones that were
    collected, but because of the ones that the bucket missed (which would
    hit the ground and then disappear forever)

    Fix:
    1. in the update function, enable the functionality to check if the drops are on the ground
    2. loop through each drop and check if it hit the ground (i.e. if the bucket missed it)
    3. if it did hit the ground, call the function missed, which resets it (just like the 
    function collected)
    */

    collected: function(bucket, drop) {
        drop.body.velocity.y = 0;
        drop.reset(0,0);
        drop.visibility = false;
        drop.alpha = 0;

        // collect data to detect level ending
        if (drop.key.localeCompare('bl_drop') == 0) {
        	this.blue_collected += 1;
        }
        else if (drop.key.localeCompare('gr_drop') == 0) {
        	this.green_collected += 1;
        }

        else { // the drop caught is brown
        	this.brown_collected += 1;
        }
        this.drops_collected += 1;
    },

    check_missed: function(drop) {
    	drop.events.onOutOfBounds.add(this.missed, this, drop);
    },

    missed: function(drop) {
    	console.log("missed");
    	drop.body.velocity.y = 0;
    	drop.reset(Math.round(Math.random()*950), 0);
    	//drop.visibility = false;
    	drop.alpha = 0;
    },

    create: function() {
        game.stage.backgroundColor = '#bce4f8';
        game.add.sprite(0, 0, 'back_2');
        percent_blue = 60;
        percent_brown = 20;
        percent_green = 100 - percent_blue - percent_brown;

        game.physics.startSystem(Phaser.Physics.ARCADE);
        drops = game.add.group();
        drops.enableBody = true;
        drops.physicsBodyType = Phaser.Physics.ARCADE;
        drops.createMultiple(percent_blue/5, 'bl_drop');
        drops.createMultiple(percent_brown/5, 'br_drop');
        drops.createMultiple(percent_green/5, 'gr_drop');

        //create bucket
        cursors = game.input.keyboard.createCursorKeys();
        bucket = game.add.sprite(game.world.centerX, 1800, 'bucket');
        game.physics.enable(bucket, Phaser.Physics.ARCADE);
        bucket.scale.setTo(this.bucket_scale, this.bucket_scale);
         // reset bucket velocity
        bucket.body.velocity.x = 0;
        bucket.body.collideWorldBounds = true;
        
        bucket.body.onCollide = new Phaser.Signal();
        bucket.body.onCollide.add(this.collected, this);

        drop_speed = 500;
        dropTime = 0;
        drop_x = 0;
        bucket_velocity=800;

    //move this out of create for game

    //test drops method
    //createDrops(400);
	},

    createDrops: function() {
        if(game.time.now > dropTime) {
            index = Math.round(Math.random()*(drops.length-1));
            drop = drops.getAt(index);
            if(drop.body.velocity.y  == 0) {
                drop_x = Math.round(Math.random()*950); //x ranges from 0 to 950
                drop.reset(drop_x, 0);
                drop.body.velocity.y = drop_speed;
                drop.visibility = true;
                drop.alpha = 1;
                dropTime = game.time.now + 600;
            }
        }
    },

    is_level_over: function() {
    	return this.drops_collected >= 25;
    },

    enable_to_hit_ground: function(drop) {
    	drop.checkWorldBounds = true;
    },

    update: function() {
        this.createDrops();

        drops.forEach(this.enable_to_hit_ground, this);

        // user presses arrow keys --> control bucket movement
        if (cursors.left.isDown) {
            bucket.body.velocity.x = -bucket_velocity;
        }
        else if (cursors.right.isDown) {
            bucket.body.velocity.x = bucket_velocity;
        }
        else {
            bucket.body.velocity.x = 0;
        }
        game.physics.arcade.collide(bucket, drops);

        drops.forEach(this.check_missed, this);

        if (this.is_level_over()) {
        	this.drops_collected = 0;
        	this.blue_collected = 0;
        	this.green_collected = 0;
        	this.brown_collected = 0;

        	// TODO: pass information about the level the user just played to levelreview.js

        	// [possibly not in this file] switch control flow to post-level info screen
        }
    }
};

