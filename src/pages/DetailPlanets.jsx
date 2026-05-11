import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export const DetailPlanets = () => {

  const { store, dispatch } = useGlobalReducer();
  const { uid } = useParams();

  const [planet, setPlanet] = useState(null);

  function getPlanet() {
    fetch("https://www.swapi.tech/api/planets/" + uid)
      .then(res => res.json())
      .then(data => setPlanet(data.result.properties))
      .catch(err => console.error(err));
  }

  useEffect(() => {
    getPlanet();
  }, [uid]);

  if (!planet) {
    return <p className="text-center mt-5">Loading...</p>;
  }

  return (
    <div className="text-center mt-5">

      <div className="card mx-auto" style={{ width: "20rem" }}>

        <img
          src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/planets/${uid}.jpg`}
          className="card-img-top"
          alt={planet.name}
        />

        <div className="card-body">
          <h5 className="card-title">{planet.name}</h5>
        </div>

        <ul className="list-group list-group-flush">

          <li className="list-group-item">
            Population: {planet.population}
          </li>

          <li className="list-group-item">
            Climate: {planet.climate}
          </li>

          <li className="list-group-item">
            Terrain: {planet.terrain}
          </li>

          <li className="list-group-item">
            Diameter: {planet.diameter}
          </li>

        </ul>

      </div>
      <Link to="/" className="btn btn-primary mt-3">
        Back to home
      </Link>
    </div>
  );
};