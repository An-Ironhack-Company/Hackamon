class Game {
    constructor() {
        this.enemies = [];
        this.map = new Map(1);
        this.player = new Player(20,30, 50, 60, this.map);
        this.enemy = new Enemy(250,120, 100, 100)
    }
}

