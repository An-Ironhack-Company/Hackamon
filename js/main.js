// Resources
const ctx = document.getElementById('game-board').getContext('2d');
let frameIndex = 0;



// let playerTemplate = [
//     [
//         spriteLoader('../images/player/playerFacingStill.png'),
//         spriteLoader('../images/player/playerFacingMoveLeftFoot.png'),
//         spr,
//     ], // Facing
// ];

// Logic

function mainLoop() {
    frameIndex++;
    ctx.clearRect(0, 0, 500, 500);
    drawMap();
    drawSelf(theGame.player);
    requestAnimationFrame(mainLoop);
}

let theGame;
function startGame() {
    theGame = new Game();
    theGame.player.loadPlayer(theGame.player.direction);
    mainLoop();
}

startGame();
theGame.map.chooseMap();
console.log(theGame.map.mapArray);

// Additional Functions
function drawSelf(obs) {
    console.log(obs)
    ctx.drawImage(obs.img, 0, 0, 32, 36, theGame.player.x, theGame.player.y, 25, 25);
}

function drawMap() {
    let positionY = 0;
    let newMap = theGame.map.mapArray;
    for (i = 0; i < newMap.length; i++) {
        let row = newMap[i];
        let positionX = 0;
        console.log(row[0]);

                        for (j=0; j < row.length; j++){
                            console.log(row[j])
                            if (row[j] === 0){
                                ctx.fillStyle = 'seagreen';
                                ctx.fillRect(positionX, positionY, 10, 10);
                                positionX += 10;
                            }
                            if (row[j]===1){
                                ctx.fillStyle= 'lightgrey';
                                ctx.fillRect(positionX, positionY, 10, 10);
                                positionX += 10;
                            }
                            if (row[j]===2){
                                ctx.fillStyle= 'black';
                                ctx.fillRect(positionX, positionY, 10, 10);
                                positionX += 10;
                            }
                            if (row[j]===3){
                                ctx.fillStyle= 'brown';
                                ctx.fillRect(positionX, positionY, 10, 10);
                                positionX += 10;
                            }
                        }
                        positionY += 10;
                    }
}

// function spriteLoader(sprite) {
//     let newSprite = new Image();
//     newSprite.src = sprite;
//     return newSprite;
// }

function drawBaseMap() {
    let map = theGame.map.mapArray;
    for (let i = 0; i < map.length; i++) {
        let positionX = 0;
        let positionY = 0;
        for (let j = 0; j < map.length; j++) {
            if (map.mapArray[i] === 0) {
                ctx.fillStyle = 'black';
                ctx.fillRect(positionX, positionY, 10, 10);
                positionX += 10;
                positionY += 10;
            }
        }
    }
}

function gameControls(e) {
    if (e.key === 'ArrowUp' || e.key === 'w') {
        theGame.player.movePlayer('y', 'N', -theGame.player.height);
    }
    if (e.key === 'ArrowDown' || e.key === 's') {
        theGame.player.movePlayer('y', 'S', theGame.player.height);
    }
    if (e.key === 'ArrowRight' || e.key === 'd') {
        theGame.player.movePlayer('x', 'E', theGame.player.width);
    }
    if (e.key === 'ArrowLeft' || e.key === 'a') {
        theGame.player.movePlayer('x', 'W', -theGame.player.width);
    }
  }
  document.onkeydown = gameControls

