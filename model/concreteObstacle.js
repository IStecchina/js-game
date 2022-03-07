export class TopObstacle extends Obstacle
{
    constructor(parent, left, right = left + 20) {
        super(parent, 0, right, Math.random() * 201, left);
    }
}

export class BottomObstacle extends Obstacle
{
    constructor(parent, left, right = left + 20) {
        super(parent, Math.random() * 201, right, 0, left);
    }
}