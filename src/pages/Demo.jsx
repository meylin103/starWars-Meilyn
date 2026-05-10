// Import necessary components from react-router-dom and other parts of the application.
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import { CardPeople } from "../components/CardPeople"

export const Demo = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  const { store, dispatch } = useGlobalReducer()

  return (
    <div className="container mt-4">
      <h2>Favorites</h2>
      {store.favorites.length === 0 ? (
        <p>Start adding favorites to see them here.</p>
      ) : (
        <div className="d-flex flex-wrap">
          {store.favorites.map((fav, index) => (
            <CardPeople key={index} people={fav} />
          ))}
        </div>
      )}

      <br />
      <Link to="/">
        <button className="btn btn-primary">Back home</button>
      </Link>
    </div>
  );
};