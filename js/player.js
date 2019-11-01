class Player {
    constructor(x, y, width, height) {
        this.img = new Image();
        this.x = x;
        this.y = y;
        this.width = 10;
        this.height = 10;
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
                this.img.src = '../images/player/playerNorth.png';
                break;
            case 'S':
                this.direction = 'S';
                this.img.src = '../images/player/playerSouth.png';
                break;
            case 'W':
                this.direction = 'W';
                this.img.src = '../images/player/playerWest.png';
                break;
            case 'E':
                this.direction = 'E';
                this.img.src = '../images/player/playerEast.png';
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
