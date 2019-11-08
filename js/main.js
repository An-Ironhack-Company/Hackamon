// RESOURCES
const canvas = document.getElementById('game-board');
let ctx = canvas.getContext('2d');
let gameStatusButton = document.getElementById('game-status');
let soundStatusButton = document.getElementById('sound-status');
let fullscreenStatusButton = document.getElementById('screen-status');

let theGame, newMap, saved_rect;
let terrainArray = [];

let gameStatus = false;
let loaded = false;
let soundStatus = true;
let fullscreenStatus = false;
let frameIndex = 0;
let loadedImages = 0;
let imageAddresses = [
    './images/environment/youngWheatLarge.png',
    './images/environment/tile.png',
    './images/game-board/red-bricks.png',
    './images/game-board/Purple_Brick_Background.png',
    './images/environment/4.png',
    './images/environment/5.png',
    './images/environment/6.png',
    './images/environment/7.jpg',
];

// LOGIC
if (!localStorage.getItem('allScores')) {
    let allScores = [];
    localStorage.setItem('allScores', JSON.stringify([]));
    console.log(localStorage.getItem('allScores'));
}
loadGame();
document.onkeydown = theGame.player.gameControls;

// FUNCTIONS
// Button Functions
gameStatusButton.onclick = () => {
    if (gameStatus === 'end') {
        window.location.reload();
    } else if (gameStatus != true) {
        gameStatus = true;
        gameButtonManagement(gameStatus);
    } else {
        gameStatus = false;
        gameButtonManagement(gameStatus);
    }
};

soundStatusButton.onclick = () => {
    console.log(soundStatus);
    if (soundStatus != true) {
        soundStatus = true;
        soundStatusButton.innerHTML =
            '<img src="./images/game-board/sound-48.png">';
        theGame.battleSound.muted = false;
        theGame.mainSound.muted = false;
        theGame.itemSound.muted = false;
        theGame.damageSound.muted = false;
        theGame.gameOverSound.muted = false;
        theGame.smashSound.muted = false;
    } else {
        soundStatus = false;
        soundStatusButton.innerHTML =
            '<img src="./images/game-board/mute-48.png">';
        theGame.battleSound.muted = true;
        theGame.mainSound.muted = true;
        theGame.itemSound.muted = true;
        theGame.damageSound.muted = true;
        theGame.gameOverSound.muted = true;
        theGame.smashSound.muted = true;
    }
};

fullscreenStatusButton.onclick = () => {
    console.log(fullscreenStatus);
    if (fullscreenStatus != true) {
        fullscreenStatus = true;
        fullscreenStatusButton.innerHTML =
            '<img src="./images/game-board/minimize.png">';
        document.getElementById('game-board').style.width = '80vw';
        document.getElementById('game-board').style.height = '100vh';
        document.getElementById('rightPannel').style.width = '16vw';
        document.getElementById('rightPannel').style.height = '500px';

        document.getElementById('game-board').style.right = '0px';
        document.getElementById('game-board').style.top = '0px';
        document.getElementById('game-board').style.left = '0px';
        document.getElementById('game-board').style.bottom = '0px';
        document.getElementById('game-status').style.left = '655px';
        document.getElementById('game-status').style.bottom = '680px';
        document.getElementById('sound-status').style.left = '430px';
        document.getElementById('sound-status').style.bottom = '610px';
        document.getElementById('screen-status').style.left = '430px';
        document.getElementById('screen-status').style.bottom = '610px';
        document.getElementById('rightPannel').style.position = 'relative';
        document.getElementById('rightPannel').style.top = '60px';
        document.getElementById('rightPannel').style.right = '2px';
        document.getElementById('roundTracker').style.left = '0px';
        document.getElementById('roundTracker').style.top = '0px';
        document.getElementById('roundTracker').style.zIndex = '5';
        document.getElementById('roundTracker').style.position = 'absolute';
        document.getElementById('game-board').style.position = 'absolute';
    } else {
        fullscreenStatus = false;
        fullscreenStatusButton.innerHTML =
            '<img src="./images/game-board/fullscreen.png">';
        document.getElementById('game-board').removeAttribute('style');
        document.getElementById('rightPannel').removeAttribute('style');
        document.getElementById('screen-status').removeAttribute('style');
        document.getElementById('sound-status').removeAttribute('style');
        document.getElementById('game-status').removeAttribute('style');
        document.getElementById('roundTracker').removeAttribute('style');
    }
};

function gameButtonManagement(status) {
    if (status === 'end') {
        gameStatus = '';
        gameStatusButton.innerHTML = '<h2>Restart Game</h2>';
    } else if (status === false) {
        gameStatusButton.innerHTML = '<h2>Start Game</h2>';
        theGame.battleSound.pause();
        theGame.mainSound.play();
    } else {
        gameStatusButton.innerHTML = '<h2>Pause Game</h2>';
        theGame.mainSound.pause();
        theGame.battleSound.play();
    }
}

// Map Functions
function preLoader(url, index) {
    return new Promise(function(resolve, reject) {
        let img = new Image();
        img.onload = function() {
            resolve(url);
            terrainArray.splice(index, 0, img);
            loadedImages++;
            if (loadedImages == imageAddresses.length) {
                loaded = true;
                generateMap();
            }
        };
        img.onerror = function() {
            reject(url);
        };
        img.src = url;
    });
}

function generateMap() {
    // ctx.clearRect(0, 0, 500, 500);
    drawMap();
    saved_rect = ctx.getImageData(0, 0, 500, 500);
}

function loadMap() {
    ctx.clearRect(0, 0, 500, 500);
    if (loaded === false) {
        for (let i = 0; i < imageAddresses.length; i++) {
            preLoader(imageAddresses[i], i);
        }
    } else {
        generateMap();
    }
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
            if (row[j] === 4) {
                ctx.drawImage(terrainArray[4], positionX, positionY, 10, 10);
                positionX += 10;
            }
            if (row[j] === 5) {
                ctx.drawImage(terrainArray[5], positionX, positionY, 10, 10);
                positionX += 10;
            }
            if (row[j] === 6) {
                ctx.drawImage(terrainArray[6], positionX, positionY, 10, 10);
                positionX += 10;
            }
            if (row[j] === 7) {
                ctx.drawImage(terrainArray[7], positionX, positionY, 10, 10);
                positionX += 10;
            }
        }
        positionY += 10;
    }
}

// Game Functions
function mainLoop() {
    if (gameStatus === true) {
        frameIndex++;
        ctx.clearRect(0, 0, 500, 500);

        // Loads Saved Map
        ctx.putImageData(saved_rect, 0, 0);

        drawSelf(theGame.player);

        //Round 1
        if (theGame.time < 60) {
            if (frameIndex % 367 == 0) {
                theGame.makeSkill();
            }
            if (frameIndex % 587 == 0) {
                theGame.makeHealth();
            }
            if (frameIndex % 400 == 0) {
                theGame.createEnemy();
            }
            if (frameIndex % 35 == 0) {
                for (let i = 0; i < theGame.enemies.length; i++) {
                    theGame.enemies[i].moveEnemy();
                    // theGame.enemies[i].moveX();
                }
            }
        } //Round 2
        else if (theGame.time >= 60 && theGame.time < 120) {
            // if (theGame.time === 60) {
            //     theGame.enemies = [];
            // }
            if (frameIndex % 587 == 0) {
                theGame.makeSkill();
            }
            if (frameIndex % 843 == 0) {
                theGame.makeHealth();
            }
            if (frameIndex % 313 == 0) {
                theGame.createEnemy();
            }
            if (frameIndex % 20 == 0) {
                for (let i = 0; i < theGame.enemies.length; i++) {
                    theGame.enemies[i].moveEnemy();
                }
            }
        } //Round 3
        else if (theGame.time >= 120 && theGame.time < 180) {
            if (theGame.time === 120) {
                theGame.enemies = [];
            }
            if (frameIndex % 832 == 0) {
                theGame.makeSkill();
            }
            if (frameIndex % 1023 == 0) {
                theGame.makeHealth();
            }
            if (frameIndex % 211 == 0) {
                theGame.createEnemy();
            }
            if (frameIndex % 12 == 0) {
                for (let i = 0; i < theGame.enemies.length; i++) {
                    theGame.enemies[i].moveEnemy();
                }
            }
        } // Round 4
        else if (theGame.time >= 180 && theGame.time < 240) {
            if (theGame.time === 180) {
                theGame.enemies = [];
            }
            if (frameIndex % 832 == 0) {
                theGame.makeSkill();
            }
            if (frameIndex % 1023 == 0) {
                theGame.makeHealth();
            }
            if (frameIndex % 142 == 0) {
                theGame.createEnemy();
            }
            if (frameIndex % 8 == 0) {
                for (let i = 0; i < theGame.enemies.length; i++) {
                    theGame.enemies[i].moveEnemy();
                }
            }
        } // Round 5
        else if (theGame.time >= 240 && theGame.time < 300) {
            if (theGame.time === 240) {
                theGame.enemies = [];
            }
            if (frameIndex % 1234 == 0) {
                theGame.makeSkill();
            }
            if (frameIndex % 1453 == 0) {
                theGame.makeHealth();
            }
            if (frameIndex % 98 == 0) {
                theGame.createEnemy();
            }
            if (frameIndex % 5 == 0) {
                for (let i = 0; i < theGame.enemies.length; i++) {
                    theGame.enemies[i].moveEnemy();
                }
            }
        } else {
            winGame();
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

        if (frameIndex % 24 == 0) {
            theGame.checkForDamage();
        }

        // Score Management
        if (frameIndex % 60 === 0) {
            theGame.updateTime();
            theGame.time += 1;
        }
        if (theGame.time >= 60 && theGame.time < 120) {
            theGame.updateRound();
            theGame.round = 'II';
        }
        if (theGame.time >= 120 && theGame.time < 180) {
            theGame.updateRound();
            theGame.round = 'III';
        }
        if (theGame.time >= 180 && theGame.time < 240) {
            theGame.updateRound();
            theGame.round = 'IV';
        }
        if (theGame.time >= 240 && theGame.time < 300) {
            theGame.updateRound();
            theGame.round = 'V';
        }

        theGame.updateBrickBar();
        gameStatus = theGame.updateHealthBar(gameStatus);
        if (gameStatus === 'end') {
            endGame();
        }
    }
    requestAnimationFrame(mainLoop);
}

function loadGame() {
    theGame = new Game();
    theGame.map.chooseMap();
    newMap = theGame.map.mapArray;
    loadMap();
    theGame.setLoops();
    theGame.updateTime();
    theGame.updateHealthBar();
    theGame.updateBrickBar();
    theGame.updateScore();
    theGame.makeSkill();
    theGame.player.loadPlayer(theGame.player.direction);
    mainLoop();
}

function endGame() {
    gameButtonManagement('end');
    gameStatus = 'end';
    theGame.finalScore = Math.round(
        theGame.score * theGame.roundValue * (theGame.time / 10),
    );

    // Add to your local record
    let allScores = JSON.parse(localStorage.getItem('allScores'));
    allScores.push(theGame.finalScore);
    localStorage.setItem(
        'allScores',
        JSON.stringify(allScores.sort().reverse()),
    );
    allScores == JSON.parse(localStorage.getItem('allScores'));
    let topScores = [];
    for (let i = 0; i < 5; i++) {
        topScores.push(allScores[i]);
        console.log(topScores);
    }

    ctx.clearRect(0, 0, 500, 500);
    ctx.putImageData(saved_rect, 0, 0);
    let messageContainer = document.createElement('div');
    if (theGame.roundValue == 1) {
        let message1 = document.createElement('div');
        messageContainer.classList.add('end-game-container');
        message1.classList.add('end-game-message');
        message1.innerHTML = `
        <h1>YOU SURVIVED ${theGame.round} ROUND!</h1>
        <h2>Score: ${theGame.score}</h2>
        <h2>Time Survived: ${theGame.time}</h2>
        <h2>Final Score: ${theGame.finalScore}</h2>
        <h2>Top Scores</h2>
        <h3>${topScores[0]}</h3>
        <h3>${topScores[1]}</h3>
        <h3>${topScores[2]}</h3>
        <h3>${topScores[3]}</h3>
        <h3>${topScores[4]}</h3>
        `;
        messageContainer.appendChild(message1);
    } else {
        let message2 = document.createElement('div');
        messageContainer.classList.add('end-game-container');
        message2.classList.add('end-game-message');
        message2.innerHTML = `
        <h1>YOU SURVIVED ${theGame.round} ROUNDS!</h1>
        <h2>Score: ${theGame.score}</h2>
        <h2>Time Survived: ${theGame.time}</h2>
        <h2>Final Score: ${theGame.finalScore}</h2>
        <h2>Top Scores</h2>
        <h3>${topScores[0]}</h3>
        <h3>${topScores[1]}</h3>
        <h3>${topScores[2]}</h3>
        <h3>${topScores[3]}</h3>
        <h3>${topScores[4]}</h3>
        `;
        messageContainer.appendChild(message2);
    }
    document.getElementById('game-container').appendChild(messageContainer);
    theGame.battleSound.pause();
    theGame.gameOverSound.play();
}
function winGame() {
    gameButtonManagement('end');
    gameStatus = 'end';
    theGame.finalScore = Math.round(
        theGame.score * theGame.roundValue * (theGame.time / 10),
    );
    // Add to your local record
    let allScores = JSON.parse(localStorage.getItem('allScores'));
    allScores.push(theGame.finalScore);
    localStorage.setItem(
        'allScores',
        JSON.stringify(allScores.sort().reverse()),
    );
    allScores == JSON.parse(localStorage.getItem('allScores'));
    let topScores = [];
    for (let i = 0; i < 5; i++) {
        console.log(topScores[i]);
    }
    ctx.clearRect(0, 0, 500, 500);
    ctx.putImageData(saved_rect, 0, 0);
    let messageContainer = document.createElement('div');
    let message = document.createElement('div');
    messageContainer.classList.add('end-game-container');
    message.classList.add('end-game-message');
    message.innerHTML = `
    <h1>You win!</h1>
    <h2>Score: ${theGame.score}</h2>
    <h2>Time Survived: ${theGame.time}</h2>
    <h2>Final Score: ${theGame.finalScore}</h2>
    <h2>Top Scores</h2>
        <h3>${topScores[0]}</h3>
        <h3>${topScores[1]}</h3>
        <h3>${topScores[2]}</h3>
        <h3>${topScores[3]}</h3>
        <h3>${topScores[4]}</h3>
    `;
    messageContainer.appendChild(message);
    document.getElementById('game-container').appendChild(messageContainer);
    theGame.battleSound.pause();
    theGame.gameOverSound.play();
}

// Draw Functions
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
