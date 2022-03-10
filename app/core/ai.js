class AI {

    #area; 
    #player;
	#score;
	#overlayGameOver;
    
    #barriers = [];
    #timer;
    
    #limit;

	#gameOver(){
		this.stop();
		this.#player.die();
		this.#showGameOverScreen();
	}

	#showGameOverScreen(){
		this.#overlayGameOver = document.createElement('div');
		this.#overlayGameOver.classList.add("game-over");
		this.#overlayGameOver.style.position = `absolute`;
		this.#overlayGameOver.style.width = `100%`;
		this.#overlayGameOver.style.height = `100%`;
		this.#overlayGameOver.style.display = `flex`;
		this.#overlayGameOver.innerText = 'GAME OVER, final score was: ' + this.#score.getScore();
		this.#overlayGameOver.style.justifyContent = 'center';
		this.#overlayGameOver.style.alignItems = 'center';
		this.#area.addElement(this.#overlayGameOver);
	}

    #selector = () => {
		this.#score.increase();
        for (let barrier of this.#barriers) { 
            barrier.move(); 
            
            if(barrier.crash(this.#player.coordinate)){
                this.#gameOver();
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

    constructor(area, player, score) {
        this.#area = area;
        this.#player = player;
		this.#score = score;
		this.#score.reset();
        
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