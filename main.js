const btnHamburger = document.querySelector('.header-right>a');
const btnClose = document.querySelector('.hamburger-menu>a');
const hamburgerMenu = document.querySelector('.hamburger-menu');

function toggleMenu() {
	hamburgerMenu.classList.toggle('active');
}
btnHamburger.addEventListener('click', toggleMenu);
btnClose.addEventListener('click', toggleMenu);

// btnHamburger.addEventListener('click', function(){
// 	hamburgerMenu.classList.toggle('active');
// });

// btnClose.addEventListener('click', function(){
// 	hamburgerMenu.classList.toggle('active');
// });