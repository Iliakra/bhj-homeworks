let menu = document.querySelectorAll('ul.menu_main > li > a');
let arrFromMenu = Array.from(menu);
let menuSub = document.querySelectorAll('ul.menu_sub');
let arrMenuSub = Array.from(menuSub);

arrFromMenu[0].onclick = function() {
	let x = arrFromMenu[0].closest('.menu__item');
	let y = x.querySelector('ul.menu_sub');
    if (y.className.includes('menu_active')) {
		y.classList.remove('menu_active');
    } else {
    	for (i=0; i < arrMenuSub.length; i++) {
    	if (arrMenuSub[i].className.includes('menu_active')) {
    		arrMenuSub[i].classList.remove('menu_active');
    	}
    }
    	
		y.classList.add('menu_active')
    }
    return false
}

arrFromMenu[1].onclick = function() {
	let x = arrFromMenu[1].closest('.menu__item');
	let y = x.querySelector('ul.menu_sub');
	if (y.className.includes('menu_active')) {
		y.classList.remove('menu_active');
    } else {
    	for (i=0; i < arrMenuSub.length; i++) {
    	if (arrMenuSub[i].className.includes('menu_active')) {
    		arrMenuSub[i].classList.remove('menu_active');
    	}
    }
    	y.classList.add('menu_active');
    }
    return false
}

arrFromMenu[2].onclick = function() {
	let x = arrFromMenu[2].closest('.menu__item');
	let y = x.querySelector('ul.menu_sub');
	if (y.className.includes('menu_active')) {
		y.classList.remove('menu_active');
    } else {
		for (i=0; i < arrMenuSub.length; i++) {
    	if (arrMenuSub[i].className.includes('menu_active')) {
    		arrMenuSub[i].classList.remove('menu_active');
    	}
    }
    	y.classList.add('menu_active');
    }
    return false
}

arrFromMenu[3].onclick = function() {
	let x = arrFromMenu[3].closest('.menu__item');
	let y = x.querySelector('ul.menu_sub');
	if (y.className.includes('menu_active')) {
		y.classList.remove('menu_active');
    } else {
    	for (i=0; i < arrMenuSub.length; i++) {
    	if (arrMenuSub[i].className.includes('menu_active')) {
    		arrMenuSub[i].classList.remove('menu_active');
    	}
    }
    	y.classList.add('menu_active');
    }
    return false
}
