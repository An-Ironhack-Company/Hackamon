class Terrain {
    constructor(x,y){
        this.img = new Image();
        this.x = x;
        this.y = y;
        this.width = 10;
        this.height = 10;
        this.terrain;
    }
    loadTerrain=(terrainType)=>{
        switch(terrainType){
            case 0: this.img.src='/images/environment/youngWheatLarge.png';
            break;
            case 1: this.img.src='/images/environment/tile.png';
            break;
            case 2: this.img.src='/images/game-board/red-bricks.png';
            break; 
            case 3: this.img.src='/images/game-board/Purple_Brick_Background.png'
            break;
            default:
            break;
        }
        console.log('----', this.img)
      }
}

