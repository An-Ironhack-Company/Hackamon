class Sprite {
    constructor(img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight) {
        this.img = new Image();
        this.sx = sx;
        this.sy = sy;
        this.sWidth = sWidth;
        this.sHeight = sHeight;
        this.dx = dx;
        this.dy = dy;
        this.dWidth = dWidth;
        this.dHeight = dHeight;
    }
}

let img = new Image();
img.src = '../images/player/MainGuySpriteSheet.png';
img.onload = function () {
    init();
};

// animation function
function init() {
    ctx.drawImage(img, 0, 0, 16, 18, 0, 0, 16, 18);
}

const scale = 2;

function init() {
    ctx.drawImage(img, 0, 0, 16, 18, 0, 0, 16 * scale, 18 * scale);
}
