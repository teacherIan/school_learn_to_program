const container = document.getElementById('card__one')
const config = {
    type: Phaser.AUTO,
    parent: 'card__one',
    width: container.clientWidth,
    height: container.clientHeight,
    backgroundColor: '#e30613',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        create: create
    }
};

const game = new Phaser.Game(config);

function create()
 {
    let colorOne = Phaser.Display.Color.HexStringToColor('#00C2EC').color
    const r1 = this.add.rectangle(200, 150, 50, 50, colorOne)
    let colorTwo = Phaser.Display.Color.HexStringToColor('#ffffff').color
    const r2 = this.add.rectangle(400, 150, 50, 50, colorTwo)

    this.physics.add.existing(r1);
    this.physics.add.existing(r2);

    r1.body.velocity.x = 100;
    r1.body.velocity.y = 100;
    r1.body.bounce.x = 1;
    r1.body.bounce.y = 1;
    r1.body.collideWorldBounds = true;

    r2.body.velocity.x = -100;
    r2.body.velocity.y = 100;
    r2.body.bounce.x = 1;
    r2.body.bounce.y = 1;
    r2.body.collideWorldBounds = true;

    this.physics.add.collider(r1,r2)
}