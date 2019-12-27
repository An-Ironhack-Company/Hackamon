class Attack {
  constructor(x, y, width, height) {
    this.img = new Image();
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.attacks = [];
    this.totalAttacks = 2;
  }

  // loadAttack
  loadAttack = () => {
    this.img.src = './images/skill/010011.png';
  };

  // drawAttack
  drawAttack = () => {};

  // moveAttack
  moveAttack = (direction, value) => {
    // move attack straight towards the direction the player is facing
    console.log('move attack');
    switch (direction) {
      case 'N':
        this.x -= value;
        break;
      case 'S':
        this.x += value;
        break;
      case 'W':
        this.y -= value;
        break;
      case 'E':
        this.y += value;
        break;
    }
  };

  // clearAttack
  clearAttack = () => {
    // clear attack when it hits the enemy
    this.x = -10;
    this.y = -10;
  };
}
