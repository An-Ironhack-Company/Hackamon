class Enemy {
    constructor(x, y, width, height, map) {
   
        this.img = new Image();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.direction = 'S';
        this.map = map;
        this.sprite;
        this.position = {up:2, down:1, left:1, right:1} 
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


    moveEnemy = () => {
        console.log(this.map.mapArray)
        let m = this.map.mapArray;

       let edirection
        let ogX = this.x,
        ogY = this.y;
        // this[axis] += value;

        if (this.x != ogX || this.y != ogY) {
            console.log(
                `The player is currently at [${this.x / 10}, ${this.y / 10}].`, 
                );
            }

            console.log(this.position)
            console.log( m, this.y, this.x )

            let enemyPosition =  {
                right: m[(this.y / 10)-1][(this.x / 10)],
                left:m[(this.y / 10)+1][(this.x / 10)],
                up:m[(this.y / 10)][(this.x / 10)-1],
                right:m[(this.y / 10)][(this.x / 10)+1],
                center: m[(this.y / 10)][(this.x / 10)]
            }

            console.log(enemyPosition)
            this.position = enemyPosition;



            if (theGame.player.x > theGame.enemy.x){
                if (this.position['right'] == 1)
                edirection = 'E'
                console.log(`E changed ${theGame.enemy.direction}`)
                theGame.enemy.x += 10
            } 
            if (theGame.player.x <= theGame.enemy.x){
                if (this.position['left'] == 1)
                edirection = 'W'
                console.log(`W changed ${theGame.enemy.direction}`)
                theGame.enemy.x -= 10
            }
            if (theGame.player.y >= theGame.enemy.y){
                if (this.position['down'] == 1)
                edirection = 'S'
                console.log(`S changed ${theGame.enemy.direction}`)
                theGame.enemy.y += 10
            } 
            if (theGame.player.y < theGame.enemy.y) {
                if (this.position['up'] == 1)
               edirection = 'N'
                console.log(`N changed ${theGame.enemy.direction}`)
                theGame.enemy.y -= 10
            }
            if (this.direction !== edirection) {
                this.loadEnemy(edirection);
                this.direction = edirection
            }
        }
                   
}
  
        
        




