import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const CardPeople = ({ people }) => {

  const { store, dispatch } = useGlobalReducer();

  const isFavorite = store.favorites.some(
    fav =>
      fav.uid === people.uid &&
      fav.type === "character"
  );

  const toggleFavorite = () => {

    if (isFavorite) {
      dispatch({
        type: "REMOVE_FAVORITE",
        payload: {
          uid: people.uid,
          type: "character"
        }
      });
    } else {
      dispatch({
        type: "ADD_FAVORITE",
        payload: {
          ...people,
          type: "character"
        }
      });
    }
  };

  return (
    <div className="card" style={{ minWidth: "18rem", marginRight: "1rem" }}>

      <img
        src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/people/${people.uid}.jpg`}
        className="card-img-top"
        alt={people.name}
        style={{ height: "300px", objectFit: "cover" }}
      />

      <div className="card-body">

        <h5 className="card-title">{people.name}</h5>

        <p className="card-text">UID: {people.uid}</p>

        <div className="d-flex justify-content-between align-items-center mt-3">

          <button
            className="btn btn-outline-danger"
            onClick={toggleFavorite}
          >
            <i className={isFavorite ? "fas fa-heart" : "far fa-heart"}></i>
          </button>

          <Link
            to={`/character/${people.uid}`}
            className="btn btn-primary"
          >
            Learn more!
          </Link>

        </div>

      </div>
    </div>
  );
};