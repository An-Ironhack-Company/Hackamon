// Resources
const ctx = document.getElementById('game-board').getContext('2d');
let frameIndex = 0;

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
    console.log(obs);
    // ctx.drawImage(
    //     obs.img,
    //     0,
    //     0,
    //     32,
    //     36,
    //     theGame.player.x,
    //     theGame.player.y,
    //     16,
    //     18,
    // );
    ctx.drawImage(obs.img, obs.x, obs.y, 16, 18);
}

function drawMap() {
    let positionY = 0;
    let newMap = theGame.map.mapArray;
    for (i = 0; i < newMap.length; i++) {
        let row = newMap[i];
        let positionX = 0;
        console.log(row[0]);

        for (j = 0; j < row.length; j++) {
            console.log(row[j]);
            if (row[j] === 0) {
                ctx.fillStyle = 'seagreen';
                ctx.fillRect(positionX, positionY, 10, 10);
                positionX += 10;
            }
            if (row[j] === 1) {
                ctx.fillStyle = 'lightgrey';
                ctx.fillRect(positionX, positionY, 10, 10);
                positionX += 10;
            }
            if (row[j] === 2) {
                ctx.fillStyle = 'black';
                ctx.fillRect(positionX, positionY, 10, 10);
                positionX += 10;
            }
            if (row[j] === 3) {
                ctx.fillStyle = 'brown';
                ctx.fillRect(positionX, positionY, 10, 10);
                positionX += 10;
            }
        }
        positionY += 10;
    }
}
function gameControls(e) {
    if (e.key === 'ArrowUp' || e.key === 'w') {
        theGame.player.movePlayer('y', 'N', -10);
    }
    if (e.key === 'ArrowDown' || e.key === 's') {
        theGame.player.movePlayer('y', 'S', 10);
    }
    if (e.key === 'ArrowRight' || e.key === 'd') {
        theGame.player.movePlayer('x', 'E', 10);
    }
    if (e.key === 'ArrowLeft' || e.key === 'a') {
        theGame.player.movePlayer('x', 'W', -10);
    }
}
document.onkeydown = gameControls;
