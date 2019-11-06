class Player {
    constructor(x, y, width, height, map) {
        this.img = new Image();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.direction = 'S';
        this.map = map;
        // this.position = { x: this.x, y: this.y };
        this.sprite;
        this.position = { up: 1, down: 1, left: 0, right: 1 };
        this.health = 100;
        this.collectedSkills = [];
        this.attack = new Attack
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
        let m = this.map.mapArray;
        let ogX = this.x + 1,
            ogY = this.y;
        if (this.direction !== direction) {
            this.loadPlayer(direction);
        }
        this[axis] += value;
        if (this.x != ogX || this.y != ogY) {
        }

        let position = {
            up: m[this.y / 10 - 1][this.x / 10],
            down: m[this.y / 10 + 1][this.x / 10],
            left: m[this.y / 10][this.x / 10 - 1],
            right: m[this.y / 10][this.x / 10 + 1],
            center: m[this.y / 10][this.x / 10],
        };
        this.position = position;

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
    };

    gameControls = e => {
        if (e.key === 'ArrowUp' || e.key === 'w') {
            if (this.position['up'] == 1) {
                theGame.player.movePlayer('y', 'N', -10);
            }
        }
        if (e.key === 'ArrowDown' || e.key === 's') {
            if (this.position['down'] == 1) {
                theGame.player.movePlayer('y', 'S', 10);
            }
        }
        if (e.key === 'ArrowRight' || e.key === 'd') {
            if (this.position['right'] == 1) {
                theGame.player.movePlayer('x', 'E', 10);
            }
        }
        if (e.key === 'ArrowLeft' || e.key === 'a') {
            if (this.position['left'] == 1) {
                theGame.player.movePlayer('x', 'W', -10);
            }
        }
        if (e.key === 'f'){
            console.log('attack!')
            this.attack.moveAttack(this.direction, 20)
        }
    };
}
