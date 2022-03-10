class Player {

    #mover;
	#gameOver;
    
    get coordinate(){
        return this.#mover.coordinate;
    }
    
    constructor(player, area) {
        this.#mover = new Mover(player, area, area.centreY, area.nearX);
		this.#gameOver = false;
    }
	
	die(){
		this.#gameOver = true;
	}

    move(e) {
		if(this.#gameOver) return;
        switch (e.keyCode) {
            // UP
            case 38:
                this.#mover.moveTop()
                break;

            // RIGHT
            case 39:
                this.#mover.moveRight()
                break;

            // DOWN
            case 40:
                this.#mover.moveBottom();
                break;

            // LEFT
            case 37:
                this.#mover.moveLeft()
                break;
        }
    }
}