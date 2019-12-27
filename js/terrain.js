class Terrain {
  constructor(x, y) {
    this.img = new Image();
    this.x = x;
    this.y = y;
    this.width = 10;
    this.height = 10;
    this.terrain;
  }
  loadTerrain = (terrainType) => {
    switch (terrainType) {
      case 0:
        this.img.src = '/images/environment/youngWheatLarge.png';
        break;
      case 1:
        this.img.src = '/images/environment/tile.png';
        break;
      case 2:
        this.img.src = '/images/game-board/red-bricks.png';
        break;
      case 3:
        this.img.src = '/images/environment/youngWheatSquare50.png';
        break;
      case 4:
        this.img.src = '/images/environment/4.png';
        break;
      case 5:
        this.img.src = '/images/environment/5.png';
        break;
      case 6:
        this.img.src = '/images/environment/6.png';
        break;
      case 7:
        this.img.src = '/images/environment/7.jpg';
        break;
      default:
    }
    console.log('----', this.img);
  };
}
