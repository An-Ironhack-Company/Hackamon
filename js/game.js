class Game {
    constructor() {
        this.map = new Map(1);
        this.player = new Player(20, 30, 50, 60, this.map);
        this.enemies = [];
        this.enemy = new Enemy(250, 120, 100, 100, this.map);
        this.mainSound = new Audio('../sound/Caketown 1.mp3'); // create audio element and start loading the file
        this.battleSound = new Audio('../sound/battle.mp3'); // create audio element and start loading the file
        this.scoreDisplay = document.getElementById('score');
        this.score = 100;
        this.healthBar = document.getElementById('health-bar-container');
    }

    updateScore() {
        this.scoreDisplay.innerText = this.score;
        if (this.score <= 90) {
            this.player.health = Math.round(this.score);
        }
    }

    updateHealthBar() {
        let currentHealth = this.player.health;
        this.healthBar.innerHTML = '';
        for (let i = 0; i < currentHealth / 10; i++) {
            let healthNode = document.createElement('div');
            healthNode.classList.add('health-bar');
            this.healthBar.appendChild(healthNode);
        }
    }
}
