class Game {
    constructor() {
        this.map = new Map(1);
        this.player = new Player(460, 10, 50, 60, this.map);
        this.enemy = new Enemy(20, 230, 500, 500, this.map);
        this.enemies = [this.enemy];
        this.scoreDisplay = document.getElementById('score');
        this.timeDisplay =document.getElementById('time')
        this.time = 0
        this.score = 0;
        this.skills = [];
        this.life = [];

        // sound
        this.healthBar = document.getElementById('health-bar-container');
        this.mainSound = new Audio('./sound/Caketown-1.mp3'); 
        this.battleSound = new Audio('./sound/Orbital-Colossus.mp3'); 
        this.battleSound.volume = 0.5;
        this.itemSound = new Audio('./sound/gotitem.mp3'); 
        this.damageSound = new Audio('./sound/ouch.mp3');
        this.damageSound.volume = 0.8;
        this.gameOverSound = new Audio('./sound/game-over.wav');
    }

    createEnemy() {
        let newEnemy = new Enemy(20, 230, 500, 500, this.map);
        this.enemies.push(newEnemy);
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
        // if (this.score <= 90) {
        //     this.player.health = Math.round(this.score);
        // }
    }

    updateTime(){
        this.timeDisplay.innerText = this.time;
    }


    updateHealthBar() {
        let currentHealth = this.player.health;
        let alive = currentHealth > 0 ? true : false;
        this.healthBar.innerHTML = '';
        for (let i = 0; i < currentHealth / 10; i++) {
            let healthNode = document.createElement('div');
            healthNode.classList.add('health-bar');
            this.healthBar.appendChild(healthNode);
        }
        return alive;
    }

    makeSkill() {
        console.log('took effect');
    let randomIndex = Math.floor(Math.random()*8)
    console.log(randomIndex)
        let newSkill01 = new Skill(20, 70, 50, 60);
        newSkill01.img.src = './images/skill/020006.png';
        let newSkill02 = new Skill(220, 60, 50, 60);
        newSkill02.img.src = './images/skill/020006.png';
        let newSkill03 = new Skill(390, 210, 50, 60);
        newSkill03.img.src = './images/skill/020006.png';
        let newSkill04 = new Skill(420, 90, 50, 60);
        newSkill04.img.src = './images/skill/020006.png';
        let newSkill05 = new Skill(230, 190, 50, 60);
        newSkill05.img.src = './images/skill/020006.png';
        let newSkill06 = new Skill(120, 270, 50, 60);
        newSkill06.img.src = './images/skill/020006.png';
        let newSkill07 = new Skill(100, 30, 50, 60);
        newSkill07.img.src = './images/skill/020006.png';
        let newSkill08 = new Skill(30, 170, 50, 60);
        newSkill08.img.src = './images/skill/020006.png';
       let skillsList = [
            newSkill01,
            newSkill02,
            newSkill03,
            newSkill04,
            newSkill05,
            newSkill06,
            newSkill07,
            newSkill08,
       ]
        console.log(this.skillsList);
        let randomSkill = skillsList.splice(randomIndex, 1);
        console.log(randomSkill);
        this.skills.push(randomSkill[0]);
        console.log(this.skills);

    }

    makeHealth() {
        console.log('took effect');
    let randomIndex = Math.floor(Math.random()*4)
    console.log(randomIndex)
        let newHealth01 = new Health(40, 170, 50, 60);
        newHealth01.img.src = './images/game-board/health.png';
        let newHealth02 = new Health(220, 10, 50, 60);
        newHealth02.img.src = './images/game-board/health.png';
        let newHealth03 = new Health(340, 180, 50, 60);
        newHealth03.img.src = './images/game-board/health.png';
        let newHealth04 = new Health(450, 60, 50, 60);
        newHealth04.img.src = './images/game-board/health.png';
       let healthList = [
            newHealth01,
            newHealth02,
            newHealth03,
            newHealth04,
       ]
        console.log(this.healthList);
        let randomHealth = healthList.splice(randomIndex, 1);
        console.log(randomHealth);
        this.life.push(randomHealth[0]);
        console.log(this.life);
    }

}
