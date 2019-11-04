class Game {
    constructor() {
        this.player = new Player(20, 20, 50, 60);
        this.enemies = [];
        this.map = new Map(1);
        this.enemy = new Enemy(250, 120, 100, 100);
        // this.mainSound = new Sound('../sound/Epic Powerful Dubstep - AShamaluevMusic.mp3')
    }
}
