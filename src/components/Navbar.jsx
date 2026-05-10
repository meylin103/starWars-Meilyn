import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {

	const { store } = useGlobalReducer();


	return (
		<nav className="navbar navbar-dark bg-dark">
			<div className="container">
				<Link to="/">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"
						alt="Star Wars Logo"
						style={{ height: "50px" }}
					/>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">
							Favorites ({store.favorites.length})
						</button>
					</Link>
					<Link to="/starwars">
						<button className="btn btn-danger">Starwars</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};