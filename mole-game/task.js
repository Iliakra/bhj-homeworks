let x = 0;
let y = 0;

for (let i=1; i<10; i++) {
    getHole = index => document.getElementById(`hole${index}`)
    let hole = getHole(i);
	hole.onclick = function () {
		if (hole.className.includes ('hole_has-mole')) {
			x++;
			document.getElementById('dead').textContent = x;
			if (x === 10) {
				alert('Победа!')
				x = 0;
		    }
		} else {
			y++;
			document.getElementById('lost').textContent = y;
			if (y === 5) {
				alert('Game over')
				y = 0;
			}
		}
	}
}

 		    