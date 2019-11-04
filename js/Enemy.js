class Enemy {
    constructor(x, y, width, height) {
        this.img = new Image();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.direction = 'S';
        this.sprite;
    }

    // load player
    loadEnemy = newDirection => {
        let spriteDirection = newDirection || this.direction;
        switch (spriteDirection) {
            case 'N':
                this.direction = 'N';
                this.img.src = '../images/player/playerBackStill.png';
                break;
            case 'S':
                this.direction = 'S';
                this.img.src = '../images/player/playerFacingStill.png';
                break;
            case 'W':
                this.direction = 'W';
                this.img.src = '../images/player/playerLeftStill.png';
                break;
            case 'E':
                this.direction = 'E';
                this.img.src = '../images/player/playerRightStill.png';
                break;
            default:
                break;
        }
    };


    moveEnemy = (axis, direction, value) => {
        let ogX = this.x,
        ogY = this.y;
        if (this.direction !== direction) {
            this.loadEnemy(direction);
        }
        this[axis] += value;
        if (this.x != ogX || this.y != ogY) {
            console.log(
                `The enemy is currently at [${this.x / 10}, ${this.y / 10}].`,
                );
            }
    
        if (theGame.player.x >= theGame.enemy.x){
            theGame.enemy.x += 1.5
        } 
        if (theGame.player.x <= theGame.enemy.x){
            theGame.enemy.x -= 1.5
        }
        if (theGame.player.y >= theGame.enemy.y){
            theGame.enemy.y += 1.5
        } 
        if (theGame.player.y <= theGame.enemy.y) {
            theGame.enemy.y -= 1.5
        }
    }
                   
}
  
        
        




