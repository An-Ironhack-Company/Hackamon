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
[0,0,1,1,4,4,4,4,4,4,4,4,4,4,4,4,4,1,4,1,4,1,4,1,4,1,4,7,1,1,1,1,1,2,2,1,2,1,2,2,2,2,1,2,2,2,1,2,0,0],
[0,0,1,1,4,5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,7,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,2,2,2,1,2,0,0],
[0,0,1,1,4,1,1,1,1,2,2,2,2,2,2,2,1,4,1,7,2,7,1,2,7,2,1,7,1,1,1,4,1,2,2,2,2,1,2,2,1,1,1,1,2,2,1,2,0,0],
[0,0,1,1,4,1,1,2,2,2,2,1,1,1,1,1,1,1,1,2,7,2,1,7,2,7,1,7,1,1,1,4,1,1,1,1,1,1,1,1,1,7,7,1,2,2,1,2,0,0],
[0,0,1,1,4,1,1,1,1,1,1,1,2,1,1,1,1,4,1,1,1,1,1,1,1,1,1,7,1,1,1,4,1,5,5,5,5,5,5,5,1,7,7,1,1,1,1,2,0,0],
[0,0,1,1,4,1,1,2,2,1,2,1,1,2,1,1,1,1,1,2,7,2,1,7,2,7,1,7,1,4,4,4,1,5,1,5,5,1,1,1,1,7,1,7,1,2,1,2,0,0],
[0,0,1,1,1,1,1,2,1,2,2,1,1,1,2,1,1,4,1,7,2,7,1,2,7,2,1,7,1,4,1,1,1,5,5,1,5,1,4,1,1,7,1,7,1,2,1,2,0,0],
[0,0,1,1,4,1,1,1,2,2,2,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,4,1,1,1,5,1,5,5,1,1,4,1,1,1,1,1,2,1,2,0,0],
[0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,5,1,5,1,4,1,1,2,2,2,1,2,1,2,0,0],
[0,0,1,1,6,1,5,1,6,1,5,1,6,1,5,1,1,4,4,4,4,4,4,4,4,4,4,4,1,7,1,1,1,5,5,5,5,1,1,4,1,2,2,2,1,1,1,2,0,0],
[0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,7,1,1,1,1,1,1,1,1,4,1,1,1,1,2,2,2,1,2,0,0],
[0,0,2,1,1,2,2,2,2,2,2,2,2,2,1,6,6,6,1,1,1,1,1,1,1,1,1,1,1,7,1,1,1,1,1,4,4,4,4,4,4,4,1,2,1,2,1,2,0,0],
[0,0,2,1,1,1,1,1,1,1,1,1,1,2,1,1,1,6,1,7,7,7,7,7,7,7,7,7,7,7,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,0,0],
[0,0,2,7,2,7,2,7,2,7,2,1,1,2,2,2,1,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,1,1,1,1,0,0],
[0,0,2,1,1,1,1,1,1,1,1,1,1,1,1,2,1,6,6,1,2,2,2,1,1,1,5,1,1,5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
[0,0,2,1,1,1,3,3,3,1,1,1,1,4,1,2,1,1,1,1,1,1,1,1,2,1,5,1,1,5,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,0,0],
[0,0,2,1,1,1,1,1,1,1,1,1,1,7,1,2,1,2,2,1,6,1,2,1,1,1,5,1,5,1,1,1,2,2,1,1,1,1,1,1,1,7,1,1,1,1,1,1,0,0],
[0,0,2,1,7,4,7,4,7,4,7,4,7,4,1,1,1,1,1,1,6,1,1,1,1,5,5,5,1,1,1,1,2,2,1,7,1,1,7,1,7,7,1,4,1,1,1,1,0,0],
[0,0,2,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,1,6,6,6,1,1,5,1,1,5,1,1,1,2,2,1,7,7,1,7,1,1,7,1,4,1,1,1,1,0,0],
[0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,7,1,1,1,1,1,1,1,4,1,1,1,1,0,0],
[0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,4,4,4,4,4,4,4,1,1,1,1,0,0],
[0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],


]

