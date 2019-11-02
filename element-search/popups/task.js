let modalMain = document.getElementById('modal_main');
let showSuccess = document.getElementById('modal_success');
let modalClose = document.getElementsByClassName("modal__close");
modalMain.classList.add('modal_active');
modalClose.item(0).onclick = function () {
	modalMain.classList.remove('modal_active');
}
modalClose.item(1).onclick = function () {
	modalMain.classList.remove('modal_active');
	showSuccess.classList.add('modal_active');
}
modalClose.item(2).onclick = function () {
	modalMain.classList.remove('modal_active');
	showSuccess.classList.remove('modal_active');
}


