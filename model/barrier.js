import { TopObstacle, BottomObstacle} from './concreteObstacle'

export class Barrier 
{
    constructor(parent, start) {
        this.top = new TopObstacle(parent, start);
        this.bottom = new BottomObstacle(parent, start);
    }
    
    move(){
        this.top.move();
        this.bottom.move();
    }
    
    safeRemove(){
        if(this.top.left <= 0 && this.bottom.left <= 0){
            this.top.remove();
            this.bottom.remove();
        }
    }
    
    collision() {
        
    }
}