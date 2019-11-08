class Enemy {
    constructor(x, y, width, height, map) {
        this.img = new Image();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.mapX = this.y / 10;
        this.mapY = this.x / 10;
        this.direction = 'S';
        this.map = map;
        this.sprite;
        this.position = { up: 0, down: 1, left: 0, right: 1, center: 1 };
        let didMove = false;
    }

    // load player
    loadEnemy = newDirection => {
        let spriteDirection = newDirection || this.direction;
        switch (spriteDirection) {
            case 'N':
                this.direction = 'N';
                this.img.src = './images/enemy/Spider-up.png';
                break;
            case 'S':
                this.direction = 'S';
                this.img.src = './images/enemy/Spider-down.png';
                break;
            case 'W':
                this.direction = 'W';
                this.img.src = './images/enemy/Spider-left.png';
                break;
            case 'E':
                this.direction = 'E';
                this.img.src = './images/enemy/Spider-right.png';
                break;
            default:
                break;
        }
    };

    moveEnemy = () => {
        this.checkPosition();
        let eDirection = this.direction;
        let currentPositionX = this.mapX;
        let currentPositionY = this.mapY;

        // // Hunt the player E/W
        // if (theGame.player.x >= this.x) {
        //     if (this.position['right'] == 1) {
        //         this.direction = 'E';
        //         this.x += 10;
        //     }
        // } else if (theGame.player.x < this.x) {
        //     if (this.position['left'] == 1) {
        //         this.direction = 'W';
        //         this.x -= 10;
        //     }
        // }
        // // Hunt the player N/S
        // if (theGame.player.y >= this.y) {
        //     if (this.position['down'] == 1 && this.position['center'] == 1) {
        //         this.direction = 'S';
        //         this.y += 10;
        //     }
        // } else if (theGame.player.y < this.y) {
        //     if (this.position['up'] == 1 && this.position['center'] == 1) {
        //         this.direction = 'N';
        //         this.y -= 10;
        //     }
        // }

        this.moveX();
        this.moveY();
        if (currentPositionY === this.mapY && currentPositionX === this.mapX) {
            console.log(`Couldn't move.`);
        }
        // this.moveY();
        // }
        if (this.direction !== eDirection) {
            this.loadEnemy(eDirection);
            this.direction = eDirection;
        }
    };
    checkPosition() {
        let m = this.map.mapArray;
        let position = {
            up: m[this.y / 10 - 1][this.x / 10],
            down: m[this.y / 10 + 1][this.x / 10],
            left: m[this.y / 10][this.x / 10 - 1],
            right: m[this.y / 10][this.x / 10 + 1],
            center: m[this.y / 10][this.x / 10],
            nw: m[this.y / 10 - 1][this.x / 10 - 1],
            ne: m[this.y / 10 - 1][this.x / 10 + 1],
            se: m[this.y / 10 + 1][this.x / 10 + 1],
            sw: m[this.y / 10 + 1][this.x / 10 - 1],
        };
        this.position = position;
        this.mapY = this.x / 10;
        this.mapX = this.y / 10;
    }
    moveX() {
        // Hunt the player E/W
        if (theGame.player.mapY > this.mapY) {
            this.moveRight();
        }
        if (theGame.player.mapY < this.mapY) {
            this.moveLeft();
        }
        this.loadEnemy(this.direction);
    }
    moveRight() {
        if (this.position['right'] == 1) {
            this.direction = 'E';
            this.x += 10;
            this.checkPosition();
            // } else if (this.position['right'] != 1) {
            //     if (this.position['down'] == 1) {
            //         this.direction = 'S';
            //         this.y += 10;
            //     } else if (this.position['up'] == 1) {
            //         this.direction = 'N';
            //         this.y -= 10;
            //     }
        }
    }
    moveLeft() {
        if (this.position['left'] == 1) {
            this.direction = 'W';
            this.x -= 10;
            this.checkPosition();
            // } else if (this.position['left'] != 1) {
            //     if (this.position['down'] == 1) {
            //         this.direction = 'S';
            //         this.y += 10;
            //     } else if (this.position['up'] == 1) {
            //         this.direction = 'N';
            //         this.y -= 10;
            //     }
        }
    }
    moveY() {
        // Hunt the player N/S
        if (theGame.player.mapX > this.mapX) {
            if (this.position['down'] === 1) {
                this.direction = 'S';
                this.y += 10;
                this.checkPosition();
                // } else if (this.position['down'] !== 1) {
                //     if (this.position['right'] === 1) {
                //         this.direction = 'E';
                //         this.x += 10;
                //     } else if (this.position['left'] === 1) {
                //         this.direction = 'W';
                //         this.x -= 10;
                //     }
            }
        }
        if (theGame.player.mapX < this.mapX) {
            if (this.position['up'] === 1) {
                this.direction = 'N';
                this.y -= 10;
                this.checkPosition();
                // } else if (this.position['up'] !== 1) {
                //     if (this.position['right'] === 1) {
                //         this.direction = 'E';
                //         this.x += 10;
                //     } else if (this.position['left'] === 1) {
                //         this.direction = 'W';
                //         this.x -= 10;
                //     }
            }
        }
        this.loadEnemy(this.direction);
    }
}
