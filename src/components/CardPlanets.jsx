import { Link } from "react-router-dom";

export const CardPlanets = ({ planet }) => {
  return (
    <div className="card" style={{ minWidth: "18rem", marginRight: "1rem" }}>
   <img
  src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/planets/${planet.uid}.jpg`}
  alt={planet.name}
/>
      <div className="card-body">
        <h5 className="card-title">{planet.name}</h5>
        <p className="card-text">UID: {planet.uid}</p>
        <Link to={`/planets/${planet.uid}`} className="btn btn-primary">
          Learn more!
        </Link>
      </div>
    </div>
  );
};
