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
        this.img.src = '../images/player/playerBackStill.png';
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
