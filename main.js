const btnHamburger = document.querySelector('.header-right>a');
const btnClose = document.querySelector('.hamburger-menu>a');
const hamburgerMenu = document.querySelector('.hamburger-menu');


// btnHamburger.addEventListener('click', openMenu(hamburgerMenu));
// btnClose.addEventListener('click', closeMenu(hamburgerMenu));


btnHamburger.addEventListener('click', function(){
	hamburgerMenu.classList.toggle('active');
});

btnClose.addEventListener('click', function(){
	hamburgerMenu.classList.toggle('active');
});