import { useState } from 'react';

const Menu = () => {
	const [menus, setMenus] = useState([
		'blogs', 'articles', 'showcase'
	]);

	return(
		<nav className="ml-4 text-secondary text-lg">
			<ul className="list-none">
				{
					menus.map((menu, index) => {
						return <li className="p-3 bg-white rounded-md shadow-xl inline mr-4 font-semilight" key={index}>{menu}</li>
					})
				}
			</ul>
		</nav>
	);
}

export default Menu;