import { Link } from "react-router-dom";

export const CardPeople = ({ people }) => {
    return (
        <div className="card" style={{ minWidth: "18rem", marginRight: "1rem" }}>
            <img src="..." className="card-img-top" alt={people.name} />
            <div className="card-body">
                <h5 className="card-title">{people.name}</h5>
                <p className="card-text">ID: {people.uid}</p>
                <Link to={`/single/${people.uid}`} className="btn btn-primary">
                    Learn more!
                </Link>
            </div>
        </div>
    );
};
