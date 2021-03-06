class Player {
    constructor(x, y, width, height, map) {
        this.img = new Image();
        this.x = x;
        this.y = y;
        this.mapX;
        this.mapY;
        this.width = width;
        this.height = height;
        this.direction = 'S';
        this.map = map;
        this.sprite;
        this.position = { up: 0, down: 1, left: 1, right: 1 };
        this.health = 100;
        this.collectedSkills = [];
        this.attack = new Attack();
    }

    // load player
    loadPlayer = newDirection => {
        let spriteDirection = newDirection || this.direction;
        switch (spriteDirection) {
            case 'N':
                this.direction = 'N';
                // this.img.src = '../images/player/playerNorth.png';
                this.img.src = './images/player/playerBackStill.png';
                break;
            case 'S':
                this.direction = 'S';
                // this.img.src = '../images/player/playerSouth.png';
                this.img.src = './images/player/playerFacingStill.png';
                break;
            case 'W':
                this.direction = 'W';
                // this.img.src = '../images/player/playerWest.png';
                this.img.src = './images/player/playerLeftStill.png';
                break;
            case 'E':
                this.direction = 'E';
                // this.img.src = '../images/player/playerEast.png';
                this.img.src = './images/player/playerRightStill.png';
                break;
            default:
                break;
        }
    };

    // move player
    movePlayer = (axis, direction, value) => {
        let ogX = this.x + 1,
            ogY = this.y;
        if (this.direction !== direction) {
            this.loadPlayer(direction);
        }
        this[axis] += value;
        // if (this.x != ogX || this.y != ogY) {
        // }

        // iterate through skills array
        for (let i = 0; i < theGame.skills.length; i++) {
            if (
                this.x === theGame.skills[i].x &&
                this.y === theGame.skills[i].y
            ) {
                theGame.score += 100;
                theGame.itemSound.play();
                theGame.updateScore();
                theGame.player.collectedSkills.push(theGame.skills[i]); // collect skills in an array
                theGame.skills[i].clearSkills(); //clear collected skills from canvas
            }
        }
        for (let i = 0; i < theGame.life.length; i++) {
            if (this.x === theGame.life[i].x && this.y === theGame.life[i].y) {
                this.health += 20;
                theGame.itemSound.play();
                theGame.life[i].clearHealth(); //clear collected health from canvas
            }
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
        };
        this.position = position;
        this.mapY = this.x / 10;
        this.mapX = this.y / 10;
    }

    gameControls = e => {
        if(gameStatus === true){
            if (e.key === 'ArrowUp' || e.key === 'w') {
                this.checkPosition();
                if (theGame.player.position['up'] == 1) {
                    theGame.player.movePlayer('y', 'N', -10);
                } else {
                    theGame.player.movePlayer('y', 'N', 0);
                }
            }
            if (e.key === 'ArrowDown' || e.key === 's') {
                this.checkPosition();
                if (theGame.player.position['down'] == 1) {
                    theGame.player.movePlayer('y', 'S', 10);
                } else {
                    theGame.player.movePlayer('y', 'S', 0);
                }
            }
            if (e.key === 'ArrowRight' || e.key === 'd') {
                this.checkPosition();
                if (theGame.player.position['right'] == 1) {
                    theGame.player.movePlayer('x', 'E', 10);
                } else {
                    theGame.player.movePlayer('x', 'E', 0);
                }
            }
            if (e.key === 'ArrowLeft' || e.key === 'a') {
                this.checkPosition();
                if (theGame.player.position['left'] == 1) {
                    theGame.player.movePlayer('x', 'W', -10);
                } else {
                    theGame.player.movePlayer('x', 'W', 0);
                }
            }
            if (e.key === 'f') {
                // console.log('attack!');
                theGame.player.attack.moveAttack(this.direction, 20);
            }
            if (e.key === 'b' || e.key === 'x') {
                console.log('Waaall Buster!!!');
                theGame.wallBuster();
                ``;
                theGame.smashSound.play();
            }
            if (e.key === 'Shift') {
                // console.log('Built! A! Wall!');
                theGame.walltrop();
            }
            if (e.key === 'c') {
                theGame.construct();
            }
        }
    };
}
