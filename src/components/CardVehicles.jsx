import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const CardVehicles = ({ vehicle }) => {

  const { store, dispatch } = useGlobalReducer();

  const isFavorite = store.favorites.some(
    fav => fav.uid === vehicle.uid && fav.type === "vehicle"
  );

  const toggleFavorite = () => {

    if (isFavorite) {

      dispatch({
        type: "REMOVE_FAVORITE",
        payload: vehicle
      });

    } else {

      dispatch({
        type: "ADD_FAVORITE",
        payload: {
          ...vehicle,
          type: "vehicle"
        }
      });

    }
  };

  return (

    <div
      className="card"
      style={{ minWidth: "18rem", marginRight: "1rem" }}
    >

      <img
        src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/vehicles/${vehicle.uid}.jpg`}
        className="card-img-top"
        alt={vehicle.name}
        style={{ height: "300px", objectFit: "cover" }}
      />

      <div className="card-body">

        <h5 className="card-title">
          {vehicle.name}
        </h5>

        <p className="card-text">
          UID: {vehicle.uid}
        </p>

        <div className="d-flex justify-content-between align-items-center mt-3">

          <button
            className="btn btn-outline-danger"
            onClick={toggleFavorite}
          >
            <i className={isFavorite ? "fas fa-heart" : "far fa-heart"}></i>
          </button>

          <Link
            to={`/vehicles/${vehicle.uid}`}
            className="btn btn-primary"
          >
            Learn more!
          </Link>

        </div>

      </div>

    </div>
  );
};