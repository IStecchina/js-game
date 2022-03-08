class AI {

    #area; 
    #player;
    
    #barriers = [];
    #timer;
    
    #limit;

    #selector = () => {
        for (let barrier of this.#barriers) { 
            barrier.move(); 
            
            if(barrier.crash(this.#player.coordinate)){
                this.stop();
            }
        }

        let first = this.#barriers[0]; 
        let last = this.#barriers[this.#barriers.length - 1];
        
        if(last.coordinate.left <= this.#limit) {
            this.#barriers.push(new Barrier(this.#area))
        }
        
        if(first.coordinate.left <= this.#area.marginL) {
            let barrier = this.#barriers.shift();
            barrier.remove();
        }
    }

    constructor(area, player) {
        this.#area = area;
        this.#player = player;
        
        this.#barriers.push(new Barrier(area));
        this.#limit = Math.round(area.marginR * .65)
    }

    start(interval = 5) {
        this.#timer = setInterval(this.#selector, interval);
    }

    stop() {
        clearInterval(this.#timer);
    }
}