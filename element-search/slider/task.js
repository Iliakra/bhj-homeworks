let images = document.querySelectorAll('div.slider__item');
let arr = Array.from(images);

console.log(arr.length);
let next = document.querySelector('div.slider__arrow_next');
let prev = document.querySelector('div.slider__arrow_prev');
let i=2;
let activeSlide = 0;

next.onclick = function () {
    
	arr[i].classList.remove('slider__item_active');
	i++;
	if (i === arr.length) {
		i = 0;
	};
	arr[i].classList.add('slider__item_active');
};

prev.onclick = function () {
	arr[i].classList.remove('slider__item_active');
	i--;
	if (i < 0) {
		i = 0;
	};
	arr[i].classList.add('slider__item_active');
};


