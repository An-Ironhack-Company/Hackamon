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
    movePlayer = (direction, value) => {
        this[direction] += value;
    };
    // draw player
    drawPlayer = () => {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    };
}