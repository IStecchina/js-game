class Obstacle {
    
    constructor(parent, top, right, bottom, left) {
        
        this.parent = parent;
        
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.left = left;
        
        this.#initialize(parent);
    }
    
    #initialize(parent){
        this.div = document.createElement('div');

        this.div.style.position = "absolute";
        this.div.style.background = "green";
        this.div.style.width = `${this.right - this.left}px`;
        this.div.style.height = `${this.top - this.bottom}px`;

        this.div.style.left = `${this.left}px`;
        this.div.style.right = `${this.right}px`;

        parent.appendChild(this.div);
    }

    move() {
        this.left -= 1;
        this.right -= 1;

        this.div.style.left = `${this.left}px`;
        this.div.style.right = `${this.right}px`;
    }

    remove() {
        this.parent.removeChild(this.div);
    }
}