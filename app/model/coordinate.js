class Coordinate {
    constructor(top, right, bottom, left) {

        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.left = left;

        this.height = bottom - top;
        this.width = right - left;
    }

    intersec(c) {
        let result =
            this.left + this.width < c.left
            || c.left + c.width < this.left
            || this.top + this.height < c.top
            || c.top + c.height < this.top
        
        return !result;
    }
}