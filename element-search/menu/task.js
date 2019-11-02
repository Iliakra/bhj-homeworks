let menu = document.querySelectorAll('ul.menu');
let menuLink = menu[0].querySelectorAll('a.menu__link');
let menuSub = menu[0].querySelectorAll('ul.menu_sub');
let arrMenu = Array.from(menuLink);
let arrSub = Array.from(menuSub);
console.log(arrMenu[6]);
arrMenu[1].onclick = function () {
    arrSub[0].classList.add('menu_active');
    arrSub[1].classList.remove('menu_active');
    return false
}
arrMenu[5].onclick = function () {
    arrSub[1].classList.add('menu_active');
    arrSub[0].classList.remove('menu_active');
    return false
}




