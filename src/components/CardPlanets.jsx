import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";


export const CardPlanets = ({ planet }) => {
  const { store, dispatch } = useGlobalReducer();

  const isFavorite = store.favorites.some(
    fav => fav.uid === planet.uid && fav.type === "planet"
  );

 const toggleFavorite = () => {

  if (isFavorite) {

    dispatch({
      type: "REMOVE_FAVORITE",
      payload: planet
    });

  } else {

    dispatch({
      type: "ADD_FAVORITE",
      payload: {
        ...planet,
        type: "planet"
      }
    });

  }
};
return (
  <div className="card" style={{ minWidth: "18rem", marginRight: "1rem" }}>

    <img
      src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/planets/${planet.uid}.jpg`}
      alt={planet.name}
    />

    <div className="card-body">

      <h5 className="card-title">{planet.name}</h5>

      <p className="card-text">
        UID: {planet.uid}
      </p>

      <div className="d-flex justify-content-between align-items-center mt-3">

        <button
          className="btn btn-outline-danger"
          onClick={toggleFavorite}
        >
          <i className={isFavorite ? "fas fa-heart" : "far fa-heart"}></i>
        </button>

        <Link
          to={`/planets/${planet.uid}`}
          className="btn btn-primary"
        >
          Learn more!
        </Link>

      </div>

    </div>

  </div>
);
};