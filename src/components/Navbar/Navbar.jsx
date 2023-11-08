import { Link } from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {
	return (
		<nav className="nav_container">
			<ul className="nav_opciones">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/favoritos">Favoritos</Link>
				</li>
			</ul>
		</nav>
	);
};
export default NavBar;