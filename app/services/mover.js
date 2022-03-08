class Mover {
    #area;
    #element;

    #step;

    #x = 0;
    #y = 0;

    static moveY(element, y) {
        element.style.top = `${y}px`
    };

    static moveX(element, x) {
        element.style.left = `${x}px`
    };

    get coordinate() {
        return new Coordinate(
            this.#y,
            this.#x + this.#element.clientWidth,
            this.#y + this.#element.clientHeight,
            this.#x
        );
    }

    constructor(element, area, top = 0, left = 0, step = 5) {
        this.#element = element;
        this.#area = area;
        this.#step = step;

        this.#x = left;
        this.#y = top;

        Mover.moveX(element, left);
        Mover.moveY(element, top);
    }

    moveTop() {
        this.#y -= this.#step;
        this.#y = this.#y < this.#area.marginT ? this.#area.marginT : this.#y;

        Mover.moveY(this.#element, this.#y);
    }

    moveRight() {
        this.#x += this.#step;
        this.#x = this.#x > this.#area.paddingR ? this.#area.paddingR : this.#x;

        Mover.moveX(this.#element, this.#x)
    }

    moveBottom() {
        this.#y += this.#step;
        this.#y = this.#y > this.#area.paddingB ? this.#area.paddingB : this.#y;

        Mover.moveY(this.#element, this.#y);
    }

    moveLeft() {
        this.#x -= this.#step;
        this.#x = this.#x < this.#area.marginL ? this.#area.marginL : this.#x;

        Mover.moveX(this.#element, this.#x);
    }
}
