// Import necessary components from react-router-dom and other parts of the application.
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import { CardPeople } from "../components/CardPeople";
import { CardPlanets } from "../components/CardPlanets";
import { CardVehicles } from "../components/CardVehicles";
import React, { useEffect } from "react"

export const Starwars = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  const { store, dispatch } = useGlobalReducer()

  async function cartaPersonajes() {
    try {
      const response = await fetch("https://www.swapi.tech/api/people");
      if (!response.ok) {
        throw new Error(`Error al obtener personajes: ${response.statusText}`)
      }
      const data = await response.json();
      const personajesBasicos = data.results;
      dispatch({
        type: "set_personajes",
        payload: personajesBasicos
      });
    } catch (error) {
      console.log("Error en cargar personajes:", error);
    }
  }

  async function cartaPlanetas() {
    try {
      const response = await fetch("https://www.swapi.tech/api/planets");
      if (!response.ok) {
        throw new Error(`Error al obtener los planetas: ${response.statusText}`)
      }
      const data = await response.json();
      dispatch({
        type: "set_planetas",
        payload: data.results
      });
    } catch (error) {
      console.log("Error en cargar planetas:", error);
    }
  }

  async function cartaVehiculos() {
    try {
      const response = await fetch("https://www.swapi.tech/api/vehicles");
      if (!response.ok) {
        throw new Error(`Error al obtener vehiculos: ${response.statusText}`)
      }
      const data = await response.json();
      dispatch({
        type: "set_vehiculos",
        payload: data.results
      });
    } catch (error) {
    console.log("Error en cargar vehiculos:", error);
  }
}

useEffect(() => {
  cartaPersonajes();
  cartaPlanetas();
  cartaVehiculos();

}, []);


return (
  <div className="container">
    <h2>Starwars</h2>

    <h3>People</h3>
    <div className="d-flex flex-row" style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
      {store.character?.map((value, index) => (
        <CardPeople key={index} people={value} />
      ))}
    </div>

    <h3>Planets</h3>
    <div className="d-flex flex-row" style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
      {store.planets?.map((value, index) => (
        <CardPlanets key={index} planet={value} />
      ))}
    </div>

    <h3>Vehicles</h3>
    <div className="d-flex flex-row" style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
      {store.vehicles?.map((value, index) => (
        <CardVehicles key={index} vehicle={value} />
      ))}
    </div>


    <Link to="/">
      <button className="btn btn-primary">Back home</button>
    </Link>
  </div>
);
};
