let images = document.querySelectorAll('div.slider__item');
let arr = Array.from(images);
let next = document.querySelector('div.slider__arrow_next');
let prev = document.querySelector('div.slider__arrow_prev');
let dots = document.querySelectorAll('div.slider__dot');
let dotsArray = Array.from(dots);
let i=0;

next.onclick = function () {
    
	arr[i].classList.remove('slider__item_active');
	dotsArray[i].classList.remove('slider__dot_active');
	i++;
	if (i === arr.length) {
		i = 0;
	};
	arr[i].classList.add('slider__item_active');
	dotsArray[i].classList.add('slider__dot_active');

};

prev.onclick = function () {
	arr[i].classList.remove('slider__item_active');
	dotsArray[i].classList.remove('slider__dot_active');
	i--;
	if (i < 0) {
		i = 4;
	};
	arr[i].classList.add('slider__item_active');
	dotsArray[i].classList.add('slider__dot_active');
};

dotsArray[0].onclick = function() {
	let dotActive = document.querySelector('div.slider__dot_active');
	let imgActive = document.querySelector('div.slider__item_active');
    dotActive.classList.remove('slider__dot_active');
    dotsArray[0].classList.add('slider__dot_active');
    imgActive.classList.remove('slider__item_active');
    arr[0].classList.add('slider__item_active');
}
dotsArray[1].onclick = function() {
	let dotActive = document.querySelector('div.slider__dot_active');
	let imgActive = document.querySelector('div.slider__item_active');
	dotActive.classList.remove('slider__dot_active'); 
	dotsArray[1].classList.add('slider__dot_active');
	imgActive.classList.remove('slider__item_active');
	arr[1].classList.add('slider__item_active');
}
dotsArray[2].onclick = function() {
	let dotActive = document.querySelector('div.slider__dot_active');
	let imgActive = document.querySelector('div.slider__item_active');
	dotActive.classList.remove('slider__dot_active');
	dotsArray[2].classList.add('slider__dot_active');
	imgActive.classList.remove('slider__item_active');
	arr[2].classList.add('slider__item_active');
}
dotsArray[3].onclick = function() {
	let dotActive = document.querySelector('div.slider__dot_active');
	let imgActive = document.querySelector('div.slider__item_active');
	dotActive.classList.remove('slider__dot_active');
	dotsArray[3].classList.add('slider__dot_active');
	imgActive.classList.remove('slider__item_active');
    arr[3].classList.add('slider__item_active');
}
dotsArray[4].onclick = function() {
	let dotActive = document.querySelector('div.slider__dot_active');
	let imgActive = document.querySelector('div.slider__item_active');
	dotActive.classList.remove('slider__dot_active');
	dotsArray[4].classList.add('slider__dot_active');
	imgActive.classList.remove('slider__item_active');
    arr[4].classList.add('slider__item_active');
}
