// Resources
const ctx = document.getElementById('game-board').getContext('2d');

let theGame;
let frameIndex = 0;
let loadedImages = 0;
let imageAddresses = [
    './images/environment/youngWheatLarge.png',
    './images/environment/tile.png',
    './images/game-board/red-bricks.png',
    './images/game-board/Purple_Brick_Background.png',
];

let terrainArray = [];

let saved_rect;

// Logic

document.onkeydown = gameControls;

// Load Terrain assets
for (let i = 0; i < imageAddresses.length; i++) {
    preLoader(imageAddresses[i], i);
}

startGame();
theGame.map.chooseMap();
let newMap = theGame.map.mapArray;

// Functions
function preLoader(url, index) {
    return new Promise(function(resolve, reject) {
        let img = new Image();
        img.onload = function() {
            resolve(url);
            terrainArray.splice(index, 0, img);
            loadedImages++;
            if (loadedImages == imageAddresses.length) {
                generateMap();
            }
        };
        img.onerror = function() {
            reject(url);
        };
        img.src = url;
    });
}

function mainLoop() {
    frameIndex++;
    ctx.clearRect(0, 0, 500, 500);
    ctx.putImageData(saved_rect, 0, 0);
    drawSelf(theGame.player);
    drawSelf(theGame.enemy);

    if (frameIndex % 3 == 0) {
        theGame.enemy.moveEnemy();
    }

    // theGame.main.playMain();
    requestAnimationFrame(mainLoop);
}

function startGame() {
    theGame = new Game();
    theGame.player.loadPlayer(theGame.player.direction);
    //mainLoop();
    // theGame.main = new Sound('.git ./sound/Epic Powerful Dubstep - AShamaluevMusic.mp3')
}

function drawSelf(obs) {
    // console.log(obs);
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

    // Still Image Loader
    ctx.drawImage(obs.img, obs.x, obs.y, 10, 10);
}

function generateMap() {
    drawMap();
    saved_rect = ctx.getImageData(0, 0, 500, 500);
    ctx.save();
    mainLoop();
}

function drawMap() {
    let positionY = 0;
    for (i = 0; i < newMap.length; i++) {
        let row = newMap[i];
        let positionX = 0;

        for (j = 0; j < row.length; j++) {
            if (row[j] === 0) {
                //let tile = new Terrain();
                //tile.loadTerrain(0);
                ctx.drawImage(terrainArray[0], positionX, positionY, 10, 10);
                // ctx.fillStyle = 'seagreen';
                // ctx.fillRect(positionX, positionY, 10, 10);
                positionX += 10;
            }
            if (row[j] === 1) {
                //let tile2 = new Terrain();
                //tile2.loadTerrain(1);
                ctx.drawImage(terrainArray[1], positionX, positionY, 10, 10);
                // ctx.fillStyle = 'lightgrey';
                // ctx.fillRect(positionX, positionY, 10, 10);
                positionX += 10;
            }
            if (row[j] === 2) {
                //let tile3 = new Terrain();
                //tile3.loadTerrain(2);
                ctx.drawImage(terrainArray[2], positionX, positionY, 10, 10);
                // ctx.fillStyle = 'black';
                // ctx.fillRect(positionX, positionY, 10, 10);
                positionX += 10;
            }
            if (row[j] === 3) {
                //let tile3 = new Terrain();
                //tile3.loadTerrain(3);
                ctx.drawImage(terrainArray[3], positionX, positionY, 10, 10);
                // ctx.fillStyle = 'brown';
                // ctx.fillRect(positionX, positionY, 10, 10);
                positionX += 10;
            }
            // if (row[j] === 4) {
            //     //let tile3 = new Terrain();
            //     //tile3.loadTerrain(3);
            //     ctx.drawImage(loadedImages[4], positionX, positionY, 10, 10);
            //     // ctx.fillStyle = 'brown';
            //     // ctx.fillRect(positionX, positionY, 10, 10);
            //     positionX += 10;
            // }
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
