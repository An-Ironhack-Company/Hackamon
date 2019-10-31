// Resources
const ctx = document.getElementById('gamePage').getContext('2d');
let frames = 0;

let playerTemplate = [
    [
        spriteLoader('../images/player/playerFacingStill.png'),
        spriteLoader('../images/player/playerFacingMoveLeftFoot.png'),
        spr,
    ], // Facing
];

// Logic

function mainLoop() {
    frames++;
    ctx.clearRect(0, 0, 500, 500);

    requestAnimationFrame(mainLoop);
}

// Additional Functions
function spriteLoader(sprite) {
    let newSprite = new Image();
    newSprite.src = sprite;
    return newSprite;
}
