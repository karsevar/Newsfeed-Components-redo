

const toggleMenu = () => {
	const parentMenu = document.querySelector('.menu');

	parentMenu.appendChild(menuMarkup());

	menuElement.classList.toggle('menu--open')

}

// Start Here: Create a reference to the ".menu" class
const menuElement = document.querySelector('.menu');

const menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', toggleMenu);


function menuMarkup() {
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
	const menuList = document.createElement('ul');
	const students = document.createElement('li');
	const faculty = document.createElement('li');
	const what = document.createElement('li');
	const tech = document.createElement('li');
	const music = document.createElement('li');
	const log = document.createElement('li');

	menuList.appendChild(students);
	menuList.appendChild(faculty);
	menuList.appendChild(what);
	menuList.appendChild(tech);
	menuList.appendChild(music);
	menuList.appendChild(log);

	students.textContent = 'Students';
	faculty.textContent = 'Faculty';
	what.textContent = 'What\'s New';
	tech.textContent = 'Tech Trends';
	music.textContent = 'Music';
	log.textContent = 'Log Out';

	return menuList;
	
}



