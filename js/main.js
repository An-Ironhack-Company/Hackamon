// Resources
const ctx = document.getElementById('game-board').getContext('2d');

let theGame;
let gameStatus = false;
let gameStatusButton = document.getElementById('game-status');
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

gameStatusButton.onclick = () => {
    if (gameStatus != true) {
        gameStatus = true;
        gameStatusButton.innerHTML = '<h2>Pause Game</h2>';
        theGame.mainSound.pause();
        theGame.battleSound.play();
    } else {
        gameStatus = false;
        gameStatusButton.innerHTML = '<h2>Start Game</h2>';
        theGame.battleSound.pause();
        theGame.mainSound.play();
    }
};

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
    if (gameStatus === true) {
        frameIndex++;
        ctx.clearRect(0, 0, 500, 500);

        // Loads Saved Map
        ctx.putImageData(saved_rect, 0, 0);

        drawSelf(theGame.player);
        
        if (frameIndex % 578 == 0){
            theGame.makeSkill();
        }
        // iterate through skills array to draw
        for (let i = 0; i < theGame.skills.length; i++) {
            drawSelf(theGame.skills[i]);
        }

        for (let i = 0; i < theGame.enemies.length; i++) {
            drawSelf(theGame.enemies[i]);
        }

        if (frameIndex % 253 == 0) {
            theGame.createEnemy();
        }
        if (frameIndex % 15 == 0) {
            for (let i = 0; i < theGame.enemies.length; i++) {
                theGame.enemies[i].moveEnemy();
                theGame.checkForDamage();
            }
        }

        // Score Management
        if (frameIndex % 20 === 0) {
            // theGame.score -= 1;
            theGame.updateScore();
        }

        gameStatus = theGame.updateHealthBar(gameStatus);
    }
    // if (theGame.skills.length === 0) {
    //     theGame.endGame();
    // }
    requestAnimationFrame(mainLoop);
}

function startGame() {
    theGame = new Game();
    theGame.updateHealthBar();
    theGame.player.loadPlayer(theGame.player.direction);
    theGame.updateScore();
    theGame.makeSkill();
    
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

function endGame() {
    if (this.skills.length === 0) {
        gameStatus = false;
    }
}

// Logic

document.onkeydown = theGame.player.gameControls;
