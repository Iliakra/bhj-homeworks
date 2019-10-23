let startTime = document.getElementById('timer');
let totalTime = startTime.textContent;
function funcTimer(totalTime) {
		totalTime = totalTime - 1;
		return totalTime
};
totalTime = setInterval(funcTimer, 1000);
console.log(totalTime);

