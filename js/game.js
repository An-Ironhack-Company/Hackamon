class Game {
    constructor() {
        this.player = new Player(20, 20, 50, 60);
        this.enemies = [];
        this.map = new Map(1);
        this.enemy = new Enemy(250, 120, 100, 100);
        this.mainSound = new Audio('../sound/Caketown 1.mp3') // create audio element and start loading the file
        this.battleSound = new Audio('../sound/battle.mp3') // create audio element and start loading the file
    }
}
