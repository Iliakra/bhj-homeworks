let timer
let x=1;
const image = document.getElementById('cookie')
image.onclick = function () {
	document.getElementById('clicker__counter').textContent = x;
	x++; 
	if (x % 2 === 0) {
    	image.width *= 2;
    	image.height *=2;
	} else {
		image.width /=2;
		image.height /=2;
	}
}