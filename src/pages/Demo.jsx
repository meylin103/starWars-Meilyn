import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { CardPeople } from "../components/CardPeople";
import { CardPlanets } from "../components/CardPlanets";
import { CardVehicles } from "../components/CardVehicles";

export const Demo = () => {

  const { store } = useGlobalReducer();

  return (
    <div className="container mt-4">

      <h2>Favorites</h2>

      {store.favorites.length === 0 ? (
        <p>Start adding favorites to see them here.</p>
      ) : (
        <div className="d-flex flex-wrap">

          {store.favorites.map((fav, index) => (
            <div key={index}>

              {fav.type === "character" && (
                <CardPeople people={fav} />
              )}

              {fav.type === "planet" && (
                <CardPlanets planet={fav} />
              )}

              {fav.type === "vehicle" && (
                <CardVehicles vehicle={fav} />
              )}

            </div>
          ))}

        </div>
      )}

      <br />

      <Link to="/">
        <button className="btn btn-primary">
          Back home
        </button>
      </Link>

    </div>
  );
};