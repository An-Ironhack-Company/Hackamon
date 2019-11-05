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

    if (frameIndex % 3333 == 0) {
        theGame.enemy.moveEnemy();
    }

    requestAnimationFrame(mainLoop);
}

function startGame() {
    theGame = new Game();
    theGame.player.loadPlayer(theGame.player.direction);
    //mainLoop();
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
    //theGame.mainSound.play(); // start playing BGM once the map is generated
    mainLoop();
}

function drawMap() {
    let positionY = 0;
    for (i = 0; i < newMap.length; i++) {
        let row = newMap[i];
        let positionX = 0;

        for (j = 0; j < row.length; j++) {
            if (row[j] === 0) {
                ctx.drawImage(terrainArray[0], positionX, positionY, 10, 10);
                positionX += 10;
            }
            if (row[j] === 1) {
                ctx.drawImage(terrainArray[1], positionX, positionY, 10, 10);
                positionX += 10;
            }
            if (row[j] === 2) {
                ctx.drawImage(terrainArray[2], positionX, positionY, 10, 10);
                positionX += 10;
            }
            if (row[j] === 3) {
                ctx.drawImage(terrainArray[3], positionX, positionY, 10, 10);
                positionX += 10;
            }
        
        }
        positionY += 10;
    }
}


console.log(theGame)

// Logic

document.onkeydown = theGame.player.gameControls;
