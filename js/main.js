// Resources
const ctx = document.getElementById('game-board').getContext('2d');

let frameIndex = 0;
let terrainArray = [];
// Logic

var images = [
    '/images/environment/youngWheatLarge.png',
    '/images/environment/tile.png',
    '/images/game-board/red-bricks.png',
    '/images/game-board/Purple_Brick_Background.png',
];
var loadedImages = [];
var promiseArray = images.map(function(imgurl) {
    var prom = new Promise(function(resolve, reject) {
        var img = new Image();
        img.onload = function() {
            //loadedImages[imgurl] = img;
            loadedImages.push(img);
            resolve();
        };
        img.src = imgurl;
    });
    return prom;
});
var saved_rect;

Promise.all(promiseArray).then(() => {
    //When images are done loading. 4 images
    drawMap();
    //ctx.save()
    saved_rect = ctx.getImageData(0, 0, 500, 500);
    console.log(saved_rect);
    mainLoop();
});

function mainLoop() {
    frameIndex++;
    ctx.clearRect(0, 0, 500, 500);
    //drawMap();
    ctx.putImageData(saved_rect, 0, 0);
    //ctx.restore()
    drawSelf(theGame.player);
    requestAnimationFrame(mainLoop);
}

let theGame;
function startGame() {
    theGame = new Game();
    theGame.player.loadPlayer(theGame.player.direction);
    //mainLoop();
}

startGame();
theGame.map.chooseMap();

console.log(theGame.map.mapArray);
//drawMap();
console.log('here');
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
    ctx.drawImage(obs.img, obs.x, obs.y, 10, 10);
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
                //let tile = new Terrain();
                //tile.loadTerrain(0);
                ctx.drawImage(loadedImages[0], positionX, positionY, 10, 10);
                //ctx.fillStyle = 'seagreen';
                //ctx.fillRect(positionX, positionY, 10, 10);
                positionX += 10;
            }
            if (row[j] === 1) {
                //let tile2 = new Terrain();
                //tile2.loadTerrain(1);
                ctx.drawImage(loadedImages[1], positionX, positionY, 10, 10);
                // ctx.fillStyle = 'lightgrey';
                // ctx.fillRect(positionX, positionY, 10, 10);
                positionX += 10;
            }
            if (row[j] === 2) {
                //let tile3 = new Terrain();
                //tile3.loadTerrain(2);
                ctx.drawImage(loadedImages[2], positionX, positionY, 10, 10);
                // ctx.fillStyle = 'black';
                // ctx.fillRect(positionX, positionY, 10, 10);
                positionX += 10;
            }
            if (row[j] === 3) {
                //let tile3 = new Terrain();
                //tile3.loadTerrain(3);
                ctx.drawImage(loadedImages[3], positionX, positionY, 10, 10);
                // ctx.fillStyle = 'brown';
                // ctx.fillRect(positionX, positionY, 10, 10);
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
