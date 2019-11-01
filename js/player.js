class Player {
    constructor(x, y, width, height) {
        this.img = new Image();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    // load player
    loadPlayer = () => {
        this.img.src = '../images/player/playerBackStill.png';
    };
    // move player
    movePlayer = (direction, value) => {
        this[direction] += value;
    };
    // draw player
    drawPlayer = () => {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    };
}