class Game {
    constructor() {
        this.map = new Map(1);
        this.player = new Player(460, 10, 10, 10, this.map);
        this.enemy = new Enemy(20, 230, 10, 10, this.map);
        this.enemies = [this.enemy];
        this.scoreDisplay = document.getElementById('score');
        this.timeDisplay = document.getElementById('time');
        this.roundDisplay = document.getElementById('round')
        this.time = 0;
        this.round = "I" 
        this.roundValue = 1
        this.score = 0;
        this.finalScore = 0;
        this.skills = [];
        this.life = [];
        this.bricks = 0;
        this.healthBar = document.getElementById('health-bar-container');
        this.brickBar = document.getElementById('brick-bar-container');

        // sound
        this.mainSound = new Audio('./sound/Caketown-1.mp3');
        this.battleSound = new Audio('./sound/Orbital-Colossus.mp3');
        this.battleSound.volume = 0.5;
        this.itemSound = new Audio('./sound/gotitem.mp3');
        this.damageSound = new Audio('./sound/ouch.mp3');
        this.damageSound.volume = 0.8;
        this.gameOverSound = new Audio('./sound/game-over.wav');
        this.smashSound = new Audio('./sound/smash.mp3');
        this.smashSound.volume = 0.2;
    }

    createEnemy() {
        if (this.time < 60) {
            let spawn1 = new Enemy(20, 10, 10, 10, this.map);
            this.enemies.push(spawn1);
        } else if (this.time < 120) {
            let spawn1 = new Enemy(470, 230, 10, 10, this.map);
            let spawn2 = new Enemy(20, 10, 10, 10, this.map);
            this.enemies.push(spawn1);
            this.enemies.push(spawn2);
        } else if (this.time < 180) {
            let spawn1 = new Enemy(470, 230, 10, 10, this.map);
            let spawn2 = new Enemy(20, 10, 10, 10, this.map);
            let spawn3 = new Enemy(20, 230, 10, 10, this.map);
            this.enemies.push(spawn1);
            this.enemies.push(spawn2);
            this.enemies.push(spawn3);
        }
        else if (this.time < 240) {
            let spawn1 = new Enemy(470, 230, 10, 10, this.map);
            let spawn2 = new Enemy(20, 10, 10, 10, this.map);
            let spawn3 = new Enemy(20, 230, 10, 10, this.map);
            let spawn4 = new Enemy(470, 20, 10, 10, this.map);
            this.enemies.push(spawn1);
            this.enemies.push(spawn2);
            this.enemies.push(spawn3);
            this.enemies.push(spawn4);
        }
        else if (this.time < 300) {
            let spawn1 = new Enemy(470, 230, 10, 10, this.map);
            let spawn2 = new Enemy(20, 10, 10, 10, this.map);
            let spawn3 = new Enemy(20, 230, 10, 10, this.map);
            let spawn4 = new Enemy(470, 20, 10, 10, this.map);
            this.enemies.push(spawn1);
            this.enemies.push(spawn2);
            this.enemies.push(spawn3);
            this.enemies.push(spawn4);
        }
        else if (this.time>= 300) {
            let spawn1 = new Enemy(470, 230, 10, 10, this.map);
            let spawn2 = new Enemy(20, 10, 10, 10, this.map);
            let spawn3 = new Enemy(20, 230, 10, 10, this.map);
            let spawn4 = new Enemy(470, 20, 10, 10, this.map);
            this.enemies.push(spawn1);
            this.enemies.push(spawn2);
            this.enemies.push(spawn3);
            this.enemies.push(spawn4);
        }
    }

    checkForDamage() {
        for (let i = 0; i < this.enemies.length; i++) {
            if (
                this.player.x == this.enemies[i].x &&
                this.player.y == this.enemies[i].y
            ) {
                this.damageSound.play();
                this.player.health -= 10;
            }
        }
    }
    updateScore() {
        this.scoreDisplay.innerText = this.score;
    }

    updateTime() {
        this.timeDisplay.innerText = this.time;
    }

    updateRound(){
        this.roundDisplay.innerText = this.round;
        this.roundValue++
    }


    updateHealthBar() {
        let currentHealth = this.player.health;
        let alive = currentHealth > 0 ? true : 'end';
        this.healthBar.innerHTML = '';
        for (let i = 0; i < currentHealth / 10; i++) {
            let healthNode = document.createElement('div');
            healthNode.classList.add('health-bar');
            this.healthBar.appendChild(healthNode);
        }
        return alive;
    }
    updateBrickBar() {
        this.brickBar.innerHTML = '';
        for (let i = 0; i < this.bricks; i++) {
            let brickNode = document.createElement('div');
            brickNode.classList.add('brick-bar');
            this.brickBar.appendChild(brickNode);
        }
    }

    makeSkill() {
        // console.log('took effect');
        let randomIndex = Math.floor(Math.random() * 8);
        // console.log(randomIndex);
        let newSkill01 = new Skill(20, 70, 10, 10);
        newSkill01.img.src = './images/game-board/72TV3d4.png';
        let newSkill02 = new Skill(220, 60, 10, 10);
        newSkill02.img.src = './images/game-board/72TV3d4.png';
        let newSkill03 = new Skill(390, 210, 10, 10);
        newSkill03.img.src = './images/game-board/72TV3d4.png';
        let newSkill04 = new Skill(420, 90, 10, 10);
        newSkill04.img.src = './images/game-board/72TV3d4.png';
        let newSkill05 = new Skill(230, 190, 10, 10);
        newSkill05.img.src = './images/game-board/72TV3d4.png';
        let newSkill06 = new Skill(120, 270, 10, 10);
        newSkill06.img.src = './images/game-board/72TV3d4.png';
        let newSkill07 = new Skill(100, 30, 10, 10);
        newSkill07.img.src = './images/game-board/72TV3d4.png';
        let newSkill08 = new Skill(30, 170, 10, 10);
        newSkill08.img.src = './images/game-board/72TV3d4.png';
        let newSkill09 = new Skill(410, 20, 10, 10);
        newSkill09.img.src = './images/game-board/72TV3d4.png';
        let newSkill10 = new Skill(430, 40, 10, 10);
        newSkill10.img.src = './images/game-board/72TV3d4.png';
        let skillsList = [
            newSkill01,
            newSkill02,
            newSkill03,
            newSkill04,
            newSkill05,
            newSkill06,
            newSkill07,
            newSkill08,
            newSkill09,
            newSkill10,
        ];
        // console.log(this.skillsList);
        let randomSkill = skillsList.splice(randomIndex, 1);
        // console.log(randomSkill);
        this.skills.push(randomSkill[0]);
        // console.log(this.skills);
    }

    makeHealth() {
        // console.log('took effect');
        let randomIndex = Math.floor(Math.random() * 4);
        // console.log(randomIndex);
        let newHealth01 = new Health(40, 170, 10, 10);
        newHealth01.img.src = './images/game-board/health.png';
        let newHealth02 = new Health(220, 10, 10, 10);
        newHealth02.img.src = './images/game-board/health.png';
        let newHealth03 = new Health(340, 180, 10, 10);
        newHealth03.img.src = './images/game-board/health.png';
        let newHealth04 = new Health(450, 60, 10, 10);
        newHealth04.img.src = './images/game-board/health.png';
        let healthList = [newHealth01, newHealth02, newHealth03, newHealth04];
        // console.log(this.healthList);
        let randomHealth = healthList.splice(randomIndex, 1);
        // console.log(randomHealth);
        this.life.push(randomHealth[0]);
        // console.log(this.life);
    }
    wallBuster = () => {
        // console.log('in wallBuster');
        let busted;
        this.player.mapY = this.player.x / 10;
        this.player.mapX = this.player.y / 10;
        this.player.checkPosition();
        switch (this.player.direction) {
            case 'N':
                if (
                    this.player.position.up != 1 &&
                    this.player.position.up != 0
                ) {
                    if (this.player.position.up >= 3) {
                        console.log(
                            this.map.mapArray[this.player.mapX - 1][
                                this.player.mapY
                            ],
                        );
                        this.map.mapArray[this.player.mapX - 1][
                            this.player.mapY
                        ] -= 1;
                    } else {
                        this.map.mapArray[this.player.mapX - 1][
                            this.player.mapY
                        ] = 1;
                        this.player.movePlayer('y', 'N', -10);
                    }
                    generateNewMap();
                    this.bricks++;
                }
                break;
            case 'S':
                if (
                    this.player.position.down != 1 &&
                    this.player.position.down != 0
                ) {
                    if (this.player.position.down >= 3) {
                        this.map.mapArray[this.player.mapX + 1][
                            this.player.mapY
                        ] -= 1;
                    } else {
                        this.map.mapArray[this.player.mapX + 1][
                            this.player.mapY
                        ] = 1;
                        this.player.movePlayer('y', 'S', 10);
                    }
                    generateNewMap();
                    this.bricks++;
                }
                break;
            case 'W':
                if (
                    this.player.position.left != 1 &&
                    this.player.position.left != 0
                ) {
                    if (this.player.position.left >= 3) {
                        this.map.mapArray[this.player.mapX][
                            this.player.mapY - 1
                        ] -= 1;
                    } else {
                        this.map.mapArray[this.player.mapX][
                            this.player.mapY - 1
                        ] = 1;
                        this.player.movePlayer('x', 'W', -10);
                    }
                    generateNewMap();
                    this.bricks++;
                }
                break;
            case 'E':
                if (
                    this.player.position.right != 1 &&
                    this.player.position.right != 0
                ) {
                    if (this.player.position.right >= 3) {
                        this.map.mapArray[this.player.mapX][
                            this.player.mapY + 1
                        ] -= 1;
                    } else {
                        console.log(this.player.mapX)
                        console.log(this.player.mapY)
                        this.map.mapArray[this.player.mapX][
                            this.player.mapY + 1
                        ] = 1;
                        this.player.movePlayer('x', 'E', 10);
                    }
                    generateNewMap();
                    this.bricks++;
                }
                break;
            default:
                break;
        }
        console.log(this.player.mapX)
        console.log(this.player.mapY)
        console.log(this.map.mapArray[2])
        console.log(this.bricks);
    };
    wallBuilder = () => {
        if (this.bricks > 0) {
            let build;
            this.player.mapY = this.player.x / 10;
            this.player.mapX = this.player.y / 10;
            switch (this.player.direction) {
                case 'N':
                    if (
                        this.player.position.up != 2 &&
                        this.player.position.up != 3
                    ) {
                        this.map.mapArray[this.player.mapX + 1][
                            this.player.mapY
                        ] = 3;
                        this.bricks--;
                        generateNewMap();
                    }
                    break;
                case 'S':
                    if (
                        this.player.position.down != 2 &&
                        this.player.position.down != 3
                    ) {
                        this.map.mapArray[this.player.mapX - 1][
                            this.player.mapY
                        ] = 3;
                        this.bricks--;
                        generateNewMap();
                    }
                    break;
                case 'W':
                    if (
                        this.player.position.left != 2 &&
                        this.player.position.left != 3
                    ) {
                        this.map.mapArray[this.player.mapX][
                            this.player.mapY + 1
                        ] = 3;
                        this.bricks--;
                        generateNewMap();
                    }
                    break;
                case 'E':
                    if (
                        this.player.position.right != 2 &&
                        this.player.position.right != 3
                    ) {
                        this.map.mapArray[this.player.mapX][
                            this.player.mapY - 1
                        ] = 3;
                        this.bricks--;
                        generateNewMap();
                    }
                    break;
                default:
                    break;
            }
        }
    };
}
