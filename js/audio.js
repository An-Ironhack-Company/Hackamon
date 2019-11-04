class OurAudio {
    constructor(mainSrc, battleSrc){
        this.mainSrc = mainSrc;
        this.battleSrc = battleSrc;
        this.main = new Audio(mainSrc);
        this.battle = new Audio(battleSrc)
        this.sound = document.createElement("audio");
        this.sound.setAttribute("preload", "auto");
        this.sound.setAttribute("controls", "none");
        this.sound.style.display = "none";
        document.body.appendChild(this.sound);
    }
    playMain(){
        this.main.play();
    }
    stopMain(){
        this.main.pause();   
    }
    playBattle(){
        this.battle.play();
    }
    stopBattle(){
        this.battle.pause();   
    }
}