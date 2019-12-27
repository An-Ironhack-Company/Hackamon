class Skill {
  constructor(x, y, width, height) {
    this.img = new Image();
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  clearSkills = () => {
    this.x = -10;
    this.y = -10;
  };
}
