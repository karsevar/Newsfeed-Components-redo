const menuItems = [
	'Students',
	'Faculty',
	'What\'s New',
	'Tech Trends',
	'Music',
	'Log Out'
]

const toggleMenu = () => {
	const parentMenu = document.querySelector('.menu');

	parentMenu.appendChild(menuMarkup(menuItems));

	menuElement.classList.toggle('menu--open')

}

// Start Here: Create a reference to the ".menu" class
const menuElement = document.querySelector('.menu');

const menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', toggleMenu);


function menuMarkup(menuItems) {
	/* 
	<div class='menu'>
		<ul>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
		</ul>
	</div>
	*/

	const listHead = document.createElement('ul');

	menuItems.forEach(item => {
		const listElement = document.createElement('li');
		listElement.textContent = item;
		listHead.appendChild(listElement);

	});

	return listHead;
	
}



