class Area {

   #parent;
   #player;
    
    constructor(pa, pl) {
        this.#parent = pa;
        this.#player = pl;
    }

    get fieldX() {
        return this.#parent.clientWidth;
    }
    
    get fieldY() {
        return this.#parent.clientHeight;
    }
    
    get nearX() {
        return Math.floor(this.marginL * 1.25)
    };

    get centreY() {
        let middle = (this.marginB - this.#player.clientHeight) / 2;
        return middle + this.marginT - this.#player.clientHeight;
    }

    get paddingR() {
        return this.#parent.clientWidth - this.#player.clientWidth;
    }

    get paddingB() {
        return this.#parent.clientHeight - this.#player.clientHeight;
    }

    get marginT() {
        return 0;
    }

    get marginR() {
        return this.#parent.clientWidth;
    }

    get marginB() {
        return this.#parent.clientHeight;
    }

    get marginL() {
        return 0;
    }

    addElement(element) {
        this.#parent.appendChild(element);
    }

    removeElement(element) {
        this.#parent.removeChild(element);
    }
}