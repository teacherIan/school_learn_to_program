const secondContainer = document.getElementById('card__two');
import logo from '../static/SSIS__logo__white.svg';

var secondConfig = {
  type: Phaser.AUTO,
  width: secondContainer.clientWidth,
  height: secondContainer.clientHeight,
  backgroundColor: '#e30613',
  parent: 'card__two',
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

var secondGame = new Phaser.Game(secondConfig);

function preload() {
  this.load.image('ball', logo);
}

function create() {
  this.matter.world.setBounds(
    0,
    0,
    secondContainer.clientWidth,
    secondContainer.clientHeight,
    32,
    true,
    true,
    false,
    true
  );

  //  Add in a stack of balls

  setInterval(() => {
    const ball = this.matter.add.image(
      Phaser.Math.Between(100, 700),
      Phaser.Math.Between(-600, 0),
      'ball'
    );

    ball.setCircle();
    ball.setFriction(0.0001);
    ball.setBounce(0.9);
    ball.setScale(0.07, 0.07);
  }, 500);
}
