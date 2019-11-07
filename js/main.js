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
//


//Round 1
        if (theGame.time <= 60){
            if (frameIndex % 367 == 0) {
                theGame.makeSkill();
            }
            if (frameIndex % 587 == 0) {
                theGame.makeHealth();
            }
            if (frameIndex % 489 == 0) {
                theGame.createEnemy();
            }
            if (frameIndex % 35 == 0) {
                for (let i = 0; i < theGame.enemies.length; i++) {
                    theGame.enemies[i].moveEnemy();
                }
            }
//Round 2
        } else if (theGame.time > 60 && theGame.time < 120) {
            if (frameIndex % 587 == 0){
                theGame.makeSkill();
            }
            if (frameIndex % 843 == 0) {
                theGame.makeHealth();
            }
            if (frameIndex % 313 == 0) {
                theGame.createEnemy();
            }
            if (frameIndex % 25 == 0) {
                for (let i = 0; i < theGame.enemies.length; i++) {
                    theGame.enemies[i].moveEnemy();
                }
            }
//Round 3
        } else if (theGame.time >= 120 && theGame.time < 180) {
            if (frameIndex % 832 == 0){
                theGame.makeSkill();
            }
            if (frameIndex % 1023 == 0) {
                theGame.makeHealth();
            }
            if (frameIndex % 211 == 0) {
                theGame.createEnemy();
            }
            if (frameIndex % 10 == 0) {
                for (let i = 0; i < theGame.enemies.length; i++) {
                    theGame.enemies[i].moveEnemy();
                }
            }
// Round 4
        } else if (theGame.time >= 180 && theGame.time < 240) {
            if (frameIndex % 832 == 0){
                theGame.makeSkill();
            }
            if (frameIndex % 1023 == 0) {
                theGame.makeHealth();
            }
            if (frameIndex % 143 == 0) {
                theGame.createEnemy();
            }
            if (frameIndex % 8 == 0) {
                for (let i = 0; i < theGame.enemies.length; i++) {
                    theGame.enemies[i].moveEnemy();
                }
            }
 // Round 5
        } else if (theGame.time >= 240 && theGame.time < 420) {
            if (frameIndex % 1234 == 0){
                theGame.makeSkill();
            }
            if (frameIndex % 1453 == 0) {
                theGame.makeHealth();
            }
            if (frameIndex % 97 == 0) {
                theGame.createEnemy();
            }
            if (frameIndex % 5 == 0) {
                for (let i = 0; i < theGame.enemies.length; i++) {
                    theGame.enemies[i].moveEnemy();
                }
            }
        } 


        for (let i = 0; i < theGame.life.length; i++) {
            drawSelf(theGame.life[i]);
        }
        // iterate through skills array to draw
        for (let i = 0; i < theGame.skills.length; i++) {
            drawSelf(theGame.skills[i]);
        }

        for (let i = 0; i < theGame.enemies.length; i++) {
            drawSelf(theGame.enemies[i]);
        }



    
        if (frameIndex % 35 == 0) {
            theGame.checkForDamage();
        }

        // Score Management
        if (frameIndex % 60 === 0) {
            theGame.updateTime();
            theGame.time += 1;
            // console.log(theGame.time)
        }

        theGame.updateBrickBar();
        gameStatus = theGame.updateHealthBar(gameStatus);
        if (gameStatus === false) {
            endGame();
        }
    }

    requestAnimationFrame(mainLoop);
}

function startGame() {
    theGame = new Game();
    theGame.updateHealthBar();
    theGame.player.loadPlayer(theGame.player.direction);
    theGame.updateScore();
    theGame.makeSkill();
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

function generateNewMap() {
    newMap = theGame.map.mapArray;
    drawMap();
    saved_rect = ctx.getImageData(0, 0, 500, 500);
    ctx.save();
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
    theGame.finalScore = theGame.time * theGame.score
    ctx.clearRect(0, 0, 500, 500);
    ctx.putImageData(saved_rect, 0, 0);
    let messageContainer = document.createElement('div');
    let message = document.createElement('div');
    messageContainer.classList.add('end-game-container');
    message.classList.add('end-game-message');
    message.innerHTML = `
    <h1>You've died!</h1>
    <h2>Score: ${theGame.score}</h2>
    <h2>Time Survived: ${theGame.time}</h2>
    <h2>Final Score: ${theGame.finalScore}</h2>`;
    messageContainer.appendChild(message);
    document.getElementById('game-container').appendChild(messageContainer);
    theGame.battleSound.pause();
    theGame.gameOverSound.play();
}

// Logic

document.onkeydown = theGame.player.gameControls;
