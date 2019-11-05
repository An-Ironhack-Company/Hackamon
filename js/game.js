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
    }

    updateScore() {
        this.scoreDisplay.innerText = this.score;
    }
}
