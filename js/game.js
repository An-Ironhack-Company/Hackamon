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
        this.skills = [];
    }

    updateScore() {
        this.scoreDisplay.innerText = this.score;
     }

     makeSkill(){
         let newSkill = new Skill(220, 70, 50, 60)
         newSkill.img.src = ('../images/skill/020006.png')
         this.skills.push(newSkill)
     }
}
