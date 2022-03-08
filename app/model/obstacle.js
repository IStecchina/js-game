class Obstacle {

    #area;
    #obstacle;

    #mover;
    
    #width;

    get coordinate() {
        return this.#mover.coordinate;
    }

    constructor(area, top, left, height, width = 20) {
        this.#area = area;
        this.#add(height, width);

        this.#width = width;
        this.#mover = new Mover(this.#obstacle, this.#area, top, left, 1);
    }

    move() {
        this.#mover.moveLeft()
    }

    remove() {
        this.#area.removeElement(this.#obstacle);
    }

    #add(height, width) {
        this.#obstacle = document.createElement('div');

        this.#obstacle.classList.add("block");
        this.#obstacle.style.background = `green`;
        this.#obstacle.style.position = `absolute`;
        this.#obstacle.style.width = `${width}px`;
        this.#obstacle.style.height = `${height}px`;

        this.#area.addElement(this.#obstacle);
    }
}

   
