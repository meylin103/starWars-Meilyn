import { useParams } from "react-router-dom"
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const DetailPeople = () => {

    const { uid } = useParams()
    const [detallesPersonaje, setDetallesPersonaje] = useState(null);

    function detallePersonaje() {
        fetch("https://www.swapi.tech/api/people/" + uid)
            .then(res => res.json())
            .then(data => setDetallesPersonaje(data.result.properties))
            .catch(err => console.error(err))
    }

    useEffect(() => {
        detallePersonaje()
    }, [uid]);


    if (!detallesPersonaje) {
        return <p className="text-center mt-5">Loading...</p>;
    }
    return (
        <div className="text-center mt-5">

            <div className="card mx-auto" style={{ width: "20rem" }}>

                <img
                    src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/people/${uid}.jpg`}
                    className="card-img-top"
                    alt={detallesPersonaje.name}
                />

                <div className="card-body">
                    <h5 className="card-title">{detallesPersonaje.name}</h5>
                </div>

                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        Height: {detallesPersonaje.height}
                    </li>
                    <li className="list-group-item">
                        Mass: {detallesPersonaje.mass}
                    </li>
                    <li className="list-group-item">
                        Gender: {detallesPersonaje.gender}
                    </li>
                    <li className="list-group-item">
                        Birth Year: {detallesPersonaje.birth_year}
                    </li>
                </ul>

            </div>
            <Link to="/" className="btn btn-primary mt-3">
                Back to home
            </Link>
        </div>
    );
};