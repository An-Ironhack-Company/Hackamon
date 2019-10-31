// let canvas = document.getElementById('game-board')
// let ctx = canvas.getContext('2d')

class Player {
    constructor(x, y, width, height) {
        // this.img = img;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    // load player
    loadPlayer = () => {
        let img = new Image();
        img.src = '/images/player/playerBackStill.png'
    
        img.onload = () => {
                this.img = img;
                this.drawPlayer()
        }
    }
    // move player
    movePlayer = (direction, value) => {
        this[direction] += value;
    }
    // draw player
    drawPlayer = () => {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
}

// make new player
let ironhacker = new Player(0, 0, 15, 15)
ironhacker.loadPlayer()