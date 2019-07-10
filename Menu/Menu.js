

const toggleMenu = () => {
	menuElement.classList.toggle('menu--open')
}

// Start Here: Create a reference to the ".menu" class
const menuElement = document.querySelector('.menu');

const menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', toggleMenu);




