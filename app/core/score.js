class Score {

	#area;
    #score;
	#overlayScore;
   
    constructor(area) {
		this.#area=area;
        this.#score = 0;
		
		this.#overlayScore = document.createElement('div');
		this.#overlayScore.classList.add("score");
		this.#overlayScore.style.position = `absolute`;
		this.#overlayScore.style.right = '0';
		this.updateDisplay();
		this.#area.addElement(this.#overlayScore);
    }
	
	getScore(){
		return this.#score;
	}

    increase() {
        this.#score += 1;
		this.updateDisplay();
    }

    reset() {
        this.#score = 0;
		this.updateDisplay();
    }
	
	updateDisplay(){
		this.#overlayScore.innerText = `SCORE : ${this.#score}`;
	}
}