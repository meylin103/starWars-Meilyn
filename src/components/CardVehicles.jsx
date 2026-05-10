import { Link } from "react-router-dom";

export const CardVehicles = ({vehicle}) => {
  return (
    <div className="card" style={{ minWidth: "18rem", marginRight: "1rem" }}>
      <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/vehicles/${vehicle.uid}.jpg`} className="card-img-top" alt="" style={{ height: "300px" }} />
      <div className="card-body">
        <h5 className="card-title">{vehicle.name}</h5>
        <p className="card-text">UID: {vehicle.uid}</p>
        <Link to={`/vehicles/${vehicle.uid}`} className="btn btn-primary">
          Learn more!
        </Link>
      </div>
    </div>
  );
};
