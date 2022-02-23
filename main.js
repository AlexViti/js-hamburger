const btnHamburger = document.querySelector('.header-right>a');
const btnClose = document.querySelector('.hamburger-menu .close');
const hamburgerMenu = document.querySelector('.hamburger-menu');

// function toggleMenu() {
// 	hamburgerMenu.classList.toggle('active');
// }

// btnHamburger.addEventListener('click', toggleMenu);
// btnClose.addEventListener('click', toggleMenu);

function toggleMenu(menu) {
	menu.classList.toggle('active');
}

btnHamburger.addEventListener('click', function() {
	toggleMenu(hamburgerMenu);
});

btnClose.addEventListener('click', function() {
	toggleMenu(hamburgerMenu);
});