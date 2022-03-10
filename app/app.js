(function(){
    const parent = document.getElementById('parent');
    const p = document.getElementById('player');

    const area = new Area(parent, p);
    const player = new Player(p, area);
	const score = new Score(area);
    const ai = new AI(area, player, score);
    
    document.onkeydown = e => player.move(e);
    ai.start();
}());