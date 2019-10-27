let timer
let x=59;
function countDown() {
	document.getElementById('timer').textContent = x;
    x--;
    if (x < 0) {
    	clearTimeout(timer);
    	alert('Вы выиграли!')
    } else {
    	timer = setTimeout(countDown, 1000);
    }
};
countDown();