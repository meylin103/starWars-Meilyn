import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const CardPeople = ({ people }) => {
    const { store, dispatch } = useGlobalReducer();

    const isFavorite = store.favorites.some(
        fav => fav.uid === people.uid
    );
    const toggleFavorite = () => {

        if (isFavorite) {
            dispatch({
                type: "REMOVE_FAVORITE",
                payload: people
            });
        } else {
            dispatch({
                type: "ADD_FAVORITE",
                payload: people
            });
        }
    };
    return (
        <div className="card" style={{ minWidth: "18rem", marginRight: "1rem" }}>
            <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/people/${people.uid}.jpg`} className="card-img-top" alt="" style={{ height: "300px" }} />
            <div className="card-body">
                <h5 className="card-title">{people.name}</h5>
                <p className="card-text">ID: {people.uid}</p>
                <p className="card-text">Gender: {people.gender}</p>
                <button className="btn btn-outline-danger mr-2" onClick={toggleFavorite}>
                    <i className={isFavorite ? "fas fa-heart" : "far fa-heart"}></i>
                </button>
                <Link to={`/character/${people.uid}`} className="btn btn-primary">
                    Learn more!
                </Link>
            </div>
        </div>
    );
};
