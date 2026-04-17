// Import necessary components from react-router-dom and other parts of the application.
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import { CardPeople } from "../components/CardPeople";
import { CardPlanets } from "../components/CardPlanets";
import { CardVehicles } from "../components/CardVehicles";

export const Starwars = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  //const { store, dispatch } = useGlobalReducer()

  return (
    <div className="container">
      <h2>Starwars</h2>

      <h3>People</h3>
      <CardPeople />
      <h3>Planets</h3>
      <CardPlanets />
      <h3>Vehicles</h3>
      <CardVehicles />

      <Link to="/">
        <button className="btn btn-primary">Back home</button>
      </Link>
    </div>
  );
};
