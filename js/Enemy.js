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
        this.position = {up:2, down:1, left:1, right:1, center:1} 
        let didMove = false
    }

    // load player
    loadEnemy = newDirection => {
        let spriteDirection = newDirection || this.direction;
        switch (spriteDirection) {
            case 'N':
                this.direction = 'N';
                this.img.src = './images/environment/dragon north.png';
                break;
            case 'S':
                this.direction = 'S';
                this.img.src = './images/environment/dragon-south-copy2.png';
                break;
            case 'W':
                this.direction = 'W';
                this.img.src = './images/environment/ dragon left .png';
                break;
            case 'E':
                this.direction = 'E';
                this.img.src = './images/environment/dragon right  .png';
                break;
            default:
                break;
        }
    };



    moveEnemy = () => {
        // console.log(this.map.mapArray)
        let m = this.map.mapArray;

       let edirection
        let ogX = this.x,
        ogY = this.y;
      

        // if (this.x != ogX || this.y != ogY) {
        //     console.log(
        //         `The player is currently at [${this.x / 10}, ${this.y / 10}].`, 
        //         );
        //     }

            // console.log(this.position)
            // console.log( m, this.y, this.x )

        
            let enemyPosition =  {
                up: m[(this.y / 10)-1][(this.x / 10)],
                down:m[(this.y / 10)+1][(this.x / 10)],
                left:m[(this.y / 10)][(this.x / 10)-1],
                right:m[(this.y / 10)][(this.x / 10)+1],
                center: m[(this.y / 10)][(this.x / 10)]
            }

            // console.log(enemyPosition)
            this.position = enemyPosition; 

            if (theGame.player.x >= this.x){
                if (this.position['right'] == 1){
                    this.direction = 'E'
                    this.x += 10
                }
            } 
            else if (theGame.player.x < this.x){
                if (this.position['left'] == 1){
                    this.direction = 'W'
                    this.x -= 10
                }
            } 
            enemyPosition =  {
                up: m[(this.y / 10)-1][(this.x / 10)],
                down:m[(this.y / 10)+1][(this.x / 10)],
                left:m[(this.y / 10)][(this.x / 10)-1],
                right:m[(this.y / 10)][(this.x / 10)+1],
                center: m[(this.y / 10)][(this.x / 10)]
            }
            this.position = enemyPosition;


            if (theGame.player.y >= this.y){
                if (this.position['down'] == 1 && this.position['center']==1 ){
                    this.direction = 'S'
                    this.y += 10
                }
            } 
            else if (theGame.player.y < this.y) {
                if (this.position['up'] == 1 && this.position['center']==1){
                    this.direction = 'N'
                    this.y -= 10
                }
            }
        
         if (this.direction !== edirection) {
                this.loadEnemy(edirection);
                this.direction = edirection
            }
        }
        
                   
}
  
        
        




