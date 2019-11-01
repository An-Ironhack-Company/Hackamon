class Player {
    constructor(x, y, width, height) {
        this.img = new Image();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.sprite;
    }

    // load player
    loadPlayer = () => {
        this.img.src = '../images/player/MainGuySpriteSheet.png';
        // this.img = new Sprite(this.img, 0, 0, 32, 36, this.x, this.y, this.width, this.height)
    };

    // move player
    movePlayer = (axis, direction, value) => {
        // switch (direction) {
        //     case N:
        //         break;
        //     case S:
        //         break;
        //     case W:
        //         break;
        //     case E:
        //         break;
        //     default:
        //         break;
        // }
        this[axis] += value;
    };
}
