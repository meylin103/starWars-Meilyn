import { useParams } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, {useEffect, useState} from "react";

export const DetailPeople = () => {

    const { store, dispatch } = useGlobalReducer()
    const { uid } = useParams()
    const [detallesPersonaje, setDetallesPersonaje] = useState("")

    function detallePersonaje() {
        fetch("https://www.swapi.tech/api/people/" + uid)
            .then(res => res.json())
            .then(data => setDetallesPersonaje(data.result.properties))
            .catch(err => console.error(err))
    }
console.log(detallesPersonaje);

    useEffect (()=> {
        detallePersonaje()
    }, [uid])
    return (
        <div className="text-center mt-5">
            <div className="card" style={{ minWidth: "18rem", marginRight: "1rem" }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{detallesPersonaje.name}</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum voluptate nihil deserunt consequatur. Illo in eum minus repellendus quibusdam quo eos iste quos, quidem nesciunt ipsum magnam obcaecati. Explicabo, aspernatur!</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">An item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                </ul>
            </div>
        </div>
    );
}; 