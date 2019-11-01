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
    drawMap();
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
theGame.map.chooseMap();
console.log(theGame.map.mapArray)

// Additional Functions
function drawSelf(obs) {
    ctx.drawImage(obs.img, obs.x, obs.y, obs.width, obs.height);
}

function drawMap(){
    let positionY = 0;
    let newMap = theGame.map.mapArray;
    for (i=0; i < newMap.length; i++){
        let row = newMap[i];
        let positionX = 0;
        console.log(row[0])

                        for (j=0; j < row.length; j++){
                            console.log(row[j])
                            if (row[j] === 0){
                                ctx.fillStyle = 'black';
                                ctx.fillRect(positionX, positionY, 10, 10);
                                positionX += 10;
                            }
                        }
                        positionY += 10;
                    }
}


ctx.fillStyle = 'black'





// function spriteLoader(sprite) {
//     let newSprite = new Image();
//     newSprite.src = sprite;
//     return newSprite;
// }




function gameControls(e){
    if (e.key === 'ArrowUp' || e.key === 'w'){
        theGame.player.movePlayer('y', - theGame.player.height)
    }
    if (e.key === 'ArrowDown' || e.key === 's'){
        theGame.player.movePlayer('y', theGame.player.height)
    }
    if (e.key === 'ArrowRight' || e.key === 'd'){
        theGame.player.movePlayer('x', theGame.player.width)
    }
    if (e.key === 'ArrowLeft' || e.key === 'a'){
        theGame.player.movePlayer('x', - theGame.player.width)
    }
  }
  document.onkeydown = gameControls






