import { Link } from "react-router-dom";

export const CardVehicles = ({vehicle}) => {
  return (
    <div className="card" style={{ minWidth: "18rem", marginRight: "1rem" }}>
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
