(function(){
    const parent = document.getElementById('parent');
    const p = document.getElementById('player');

    const area = new Area(parent, p);
    const player = new Player(p, area);
    const ai = new AI(area, player);
    
    document.onkeydown = e => player.move(e);
    ai.start();
}());