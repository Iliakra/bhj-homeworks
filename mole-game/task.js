let x = 0;
let y = 0;

for (let i=1; i<10; i++) {
    getHole = index => document.getElementById(`hole${index}`)
    let hole = getHole(i);
	hole.onclick = function () {
		if (hole.className.includes ('hole_has-mole')) {
			document.getElementById('dead').textContent = x;
		    x++;
		    if (x === 10) {
		    	x = 0;
		    	alert('Победа!')
		    }
		} else {
		document.getElementById('lost').textContent = y;
		y++;
		if (y === 5) {
			y = 0;
			alert('Game over')
		}
		}
	}
}