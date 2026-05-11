import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export const DetailVehicles = () => {

  const { store, dispatch } = useGlobalReducer();
  const { uid } = useParams();

  const [vehicle, setVehicle] = useState(null);

  function getVehicle() {
    fetch("https://www.swapi.tech/api/vehicles/" + uid)
      .then(res => res.json())
      .then(data => setVehicle(data.result.properties))
      .catch(err => console.error(err));
  }

  useEffect(() => {
    getVehicle();
  }, [uid]);

  if (!vehicle) {
    return <p className="text-center mt-5">Loading...</p>;
  }

  return (
    <div className="text-center mt-5">

      <div className="card mx-auto" style={{ width: "20rem" }}>

        <img
          src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/vehicles/${uid}.jpg`}
          className="card-img-top"
          alt={vehicle.name}
        />

        <div className="card-body">
          <h5 className="card-title">{vehicle.name}</h5>
        </div>

        <ul className="list-group list-group-flush">

          <li className="list-group-item">
            Model: {vehicle.model}
          </li>

          <li className="list-group-item">
            Vehicle Class: {vehicle.vehicle_class}
          </li>

          <li className="list-group-item">
            Manufacturer: {vehicle.manufacturer}
          </li>

          <li className="list-group-item">
            Crew: {vehicle.crew}
          </li>

        </ul>

      </div>
      <Link to="/" className="btn btn-primary mt-3">
        Back to home
      </Link>
    </div>
  );
};