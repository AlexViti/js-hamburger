const btnHamburger = document.querySelector('.header-right>a');
const btnClose = document.querySelector('.hamburger-menu>a');
const hamburgerMenu = document.querySelector('.hamburger-menu');

// function openMenu(btn) {
// 	btn.style.display = 'block';
// }

// function closeMenu(btn) {
// 	btn.style.display = 'none';
// }

// btnHamburger.addEventListener('click', openMenu(hamburgerMenu));
// btnClose.addEventListener('click', closeMenu(hamburgerMenu));

btnHamburger.addEventListener('click', function(){
	hamburgerMenu.style.display = 'block';
});

btnClose.addEventListener('click', function(){
	hamburgerMenu.style.display = 'none';
});