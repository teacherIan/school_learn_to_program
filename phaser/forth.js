const forthContainer = document.getElementById('card__four');
import school_logo from '../static/SSIS__logo.svg';

var configFour = {
  type: Phaser.AUTO,
  width: forthContainer.clientWidth,
  height: forthContainer.clientHeight,
  backgroundColor: 'transparent',
  parent: 'card__four',
  physics: {
    default: 'matter',
    matter: {
      enableSleeping: true,
    },
  },
  scene: {
    preload: preload,
    create: create,
  },
};

var gameFour = new Phaser.Game(configFour);

function preload() {
  this.load.image('ball', school_logo);
}

function create() {
  this.matter.world.setBounds(
    0,
    0,
    forthContainer.clientWidth,
    forthContainer.clientHeight,
    32,
    false,
    true,
    false,
    true
  );

  //  Add in a stack of balls

  for (var i = 0; i < 200; i++) {
    var ball = this.matter.add.image(
      Phaser.Math.Between(100, 700),
      Phaser.Math.Between(-600, 0),
      'ball'
    );

    ball.setCircle();
    ball.setFriction(0.00001);
    ball.setBounce(1.0);
    ball.setScale(0.07, 0.07);
  }
}
