// Resources
const ctx = document.getElementById('game-board').getContext('2d');
let frames = 0;

// let playerTemplate = [
//     [
//         spriteLoader('../images/player/playerFacingStill.png'),
//         spriteLoader('../images/player/playerFacingMoveLeftFoot.png'),
//         spr,
//     ], // Facing
// ];

// Logic

function mainLoop() {
    frames++;
    ctx.clearRect(0, 0, 500, 500);

    drawSelf(theGame.player);
    requestAnimationFrame(mainLoop);
}

let theGame;
function startGame() {
    theGame = new Game();
    theGame.player.loadPlayer();
    mainLoop();
}

startGame();

// Additional Functions
function drawSelf(obs) {
    ctx.drawImage(obs.img, obs.x, obs.y, obs.width, obs.height);
}
// function spriteLoader(sprite) {
//     let newSprite = new Image();
//     newSprite.src = sprite;
//     return newSprite;
// }
