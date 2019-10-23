let startTime = document.getElementById('timer');
let totalTime = startTime.textContent;
console.log(totalTime);
function funcTimer(totalTime) {
		totalTime = totalTime - 1;
		return totalTime;
};
console.log(funcTimer(totalTime));

startTime.textContent = setInterval(funcTimer, 1000);

