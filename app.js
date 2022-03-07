import { Barrier } from './model/barrier'

(function(){
    const parent = document.getElementById('game-area');
    let barriers = [new Barrier(parent, 600)];

    (function Update() {

        for (let barrier of barriers) {
            barrier.move();
        }

        let barrier = barriers.shift();
        barrier.safeRemove();

        setTimeout(Update, 5);
    }());
}());