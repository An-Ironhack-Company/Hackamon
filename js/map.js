class Map {
    constructor(lvl){
        this.mapArray = [];
        this.lvl = lvl;
    }
    chooseMap=()=>{
        if (this.lvl === 1){
            this.mapArray = mapArray1;
        }
    }
    
}





let mapArray1 = [
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
[0,0,1,1,2,2,2,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,1,3,0,0],
[0,0,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,1,3,0,0],
[0,0,1,1,2,1,1,1,1,2,2,1,1,1,1,1,1,2,1,2,2,2,1,2,2,2,1,2,1,1,1,1,1,1,1,3,3,3,3,3,1,1,1,1,3,3,1,3,0,0],
[0,0,1,1,1,1,1,1,2,2,2,1,1,1,1,1,1,2,1,2,2,2,1,2,2,2,1,2,1,1,1,1,1,1,1,3,3,3,3,3,1,3,3,1,3,3,1,3,0,0],
[0,0,1,1,1,1,1,2,2,2,2,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,3,3,3,3,3,1,3,3,1,1,1,1,3,0,0],
[0,0,1,1,1,1,1,2,2,2,2,1,1,1,1,1,1,2,1,2,2,2,1,2,2,2,1,2,1,1,1,1,1,1,1,3,3,1,1,1,1,3,3,3,3,3,3,3,0,0],
[0,0,1,1,1,1,1,2,2,2,2,1,1,1,1,1,1,2,1,2,2,2,1,2,2,2,1,2,1,1,1,1,1,1,1,3,3,1,3,3,1,3,3,3,3,3,3,3,0,0],
[0,0,1,1,1,1,1,2,2,2,2,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3,1,3,3,1,1,1,1,1,3,3,3,0,0],
[0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3,1,3,3,1,3,3,3,1,3,3,3,0,0],
[0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,3,3,1,3,3,1,3,3,3,1,1,1,3,0,0],
[0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3,1,1,1,3,3,3,1,3,0,0],
[0,0,2,1,1,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,1,3,3,3,1,3,0,0],
[0,0,2,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,1,3,3,3,1,3,0,0],
[0,0,2,2,2,2,2,2,2,2,2,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
[0,0,2,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
[0,0,2,1,1,1,2,2,2,1,1,1,1,2,1,1,1,1,1,1,2,2,2,2,2,2,2,2,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,1,0,0],
[0,0,2,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,3,3,1,1,1,1,1,1,3,3,1,1,1,1,1,1,0,0],
[0,0,2,1,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,2,2,1,1,2,2,1,1,1,1,1,1,3,3,1,3,3,1,3,1,3,3,1,3,3,1,1,1,0,0],
[0,0,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,2,2,1,1,1,1,1,1,3,3,1,3,3,1,3,1,3,3,1,3,3,1,1,1,0,0],
[0,0,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3,1,1,1,1,1,1,3,3,1,1,1,0,0],
[0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,1,0,0],
[0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],


]

