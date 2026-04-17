import { Link } from "react-router-dom";

export const CardPeople = ({ people }) => {
    return (
        <div className="card" style={{ minWidth: "18rem", marginRight: "1rem" }}>
            <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/people/${people.uid}.jpg`} className="card-img-top" alt="" style={{ height: "300px" }} />
            <div className="card-body">
                <h5 className="card-title">{people.name}</h5>
                <p className="card-text">ID: {people.uid}</p>
                <p className="card-text">Gender: {people.gender}</p>
                <Link to={`/character/${people.uid}`} className="btn btn-primary">
                    Learn more!
                </Link>
            </div>
        </div>
    );
};
