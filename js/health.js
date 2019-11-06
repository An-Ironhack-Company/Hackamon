class Health {
    constructor(x, y, width, height) {
        this.img = new Image();
        this.x = randomX;
        this.y = randomY;
        this.width = width;
        this.height = height;
    }

    clearHealth = () => {
        this.x = -10;
        this.y = -10;
    }
}
