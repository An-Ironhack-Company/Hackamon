class Player {
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
    loadPlayer = newDirection => {
        // this.img.src = '../images/player/MainGuySpriteSheet.png';
        let spriteDirection = newDirection || this.direction;
        switch (spriteDirection) {
            case 'N':
                this.direction = 'N';
                // this.img.src = '../images/player/playerNorth.png';
                this.img.src = '../images/player/playerBackStill.png';
                break;
            case 'S':
                this.direction = 'S';
                // this.img.src = '../images/player/playerSouth.png';
                this.img.src = '../images/player/playerFacingStill.png';
                break;
            case 'W':
                this.direction = 'W';
                // this.img.src = '../images/player/playerWest.png';
                this.img.src = '../images/player/playerLeftStill.png';
                break;
            case 'E':
                this.direction = 'E';
                // this.img.src = '../images/player/playerEast.png';
                this.img.src = '../images/player/playerRightStill.png';
                break;
            default:
                break;
        }
    };

    // move player
    movePlayer = (axis, direction, value) => {
        if (this.direction !== direction) {
            this.loadPlayer(direction);
        }
        this[axis] += value;
    };
}
