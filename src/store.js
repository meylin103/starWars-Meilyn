export const initialStore = () => {
  return {
    message: null,
    character: [],
    planets: [],
    vehicles: [],
    favorites: []
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {

    case "set_personajes":
      return {
        ...store,
        character: action.payload
      };

    case "set_planetas":
      return {
        ...store,
        planets: action.payload
      };

    case "set_vehiculos":
      return {
        ...store,
        vehicles: action.payload
      };

    case "ADD_FAVORITE":
      return {
        ...store,
        favorites: store.favorites.some(
          fav =>
            fav.uid === action.payload.uid &&
            fav.type === action.payload.type
        )
          ? store.favorites
          : [...store.favorites, action.payload]
      };

    case "REMOVE_FAVORITE":
      return {
        ...store,
        favorites: store.favorites.filter(
          fav =>
            !(fav.uid === action.payload.uid &&
              fav.type === action.payload.type)
        )
      };

    default:
      return store;
  }
}