class Barrier {
    #top;
    #bottom;

    get coordinate() {
        return new Coordinate(
            this.#top.coordinate.top,
            this.#top.coordinate.right,
            this.#bottom.coordinate.bottom,
            this.#bottom.coordinate.left
        );
    }

    constructor(area) {

        let fissure = Math.floor(Math.random() * 20 + 60);
        let heightT = area.marginT + Math.floor(Math.random() * 200) + 50;
        let heightB = area.fieldY - heightT - fissure;

        this.#top = new Obstacle(area, area.marginT, area.marginR, heightT);
        this.#bottom = new Obstacle(area, area.marginT + heightT + fissure, area.marginR, heightB);
    }

    move() {
        this.#top.move();
        this.#bottom.move();
    }

    remove() {
        this.#top.remove();
        this.#bottom.remove();
    }
    
    crash(coordinate) {
        return this.#top.coordinate.intersec(coordinate) || this.#bottom.coordinate.intersec(coordinate);
    }
}
