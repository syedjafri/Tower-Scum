console.log('loading redvirus sprite');
var redVirus = function(that, x, y, number){ //x and y coordinates for positioning
  x = x || 0;
  y = x || 0;

  console.log('spawning redvirusSprite');

  var walkPNGs = ['red/walk/01.png',
                  'red/walk/02.png',
                  'red/walk/03.png',
                  'red/walk/04.png',
                  'red/walk/05.png',
                  'red/walk/06.png',
                  'red/walk/07.png',
                  'red/walk/08.png'];

  var diePNGs = ['red/die/01.png',
                'red/die/02.png',
                'red/die/03.png'];

  var attackPNGs = ['red/attack/01.png',
                    'red/attack/02.png',
                    'red/attack/03.png',
                    'red/attack/04.png',
                    'red/attack/05.png'];

  var addMovement = function(virus){

  	var startDrag = function(virus){
	    virus.animations.play('airwalk');
	    virus.body.moves = false;
	    tween.pause();
	    console.log('startDrag on redVirus');
	  }

	var stopDrag = function(virus){
	      virus.body.moves = true;
	      virus.animations.play('walk');
	      virus.body.velocity.x = 100
	      //tween = that.game.add.tween(virus).to({ x: that.game.width }, 10000, Phaser.Easing.Linear.None, true);
	      console.log('stopDrag on redVirus');
	  }


	that.game.physics.arcade.enable(virus);
    virus.body.collideWorldBounds = true;
    virus.inputEnabled = true;
    virus.input.enableDrag(true);

    virus.events.onDragStart.add(startDrag, this);
    virus.events.onDragStop.add(stopDrag, this);

    virus.animations.add('walk', walkPNGs, 15, true);
    virus.animations.add('attack', attackPNGs, 15, true);
    virus.animations.add('die', diePNGs, 15, true);

    virus.animations.add('airwalk', walkPNGs, 45, true);
    virus.animations.play('walk');

    //var tween = that.game.add.tween(virus).to({ x: that.game.width }, 10000, Phaser.Easing.Linear.None, true);
    virus.enableBody = true;
    virus.body.gravity.y = 100
    virus.body.velocity.x = 100
	
  }


  redViruses = that.game.add.group();
  redViruses.enableBody = true;
  redViruses.physicsBodyType = Phaser.Physics.ARCADE;
  for(var i = 0; i < number; i++){
  	setTimeout(function(){
  		var redVirus = redViruses.create(0+x, 480+y, 'viruses', "red/walk/01.png");
  		addMovement(redVirus);
  	}, (i*1000)+500)
  	
  }

};