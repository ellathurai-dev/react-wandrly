import { createContext, useContext, useState } from "react";

const TravelContext = createContext();

function TravelProvider({ children }) {
  const [favourites, setFavourites] = useState([]);

  function addFavourite(trip) {
    const alreadyAdded = favourites.some(
      (item) => item.id === trip.id
    );

    if (!alreadyAdded) {
      setFavourites([...favourites, trip]);
    }
  }

  function removeFavourite(id) {
    setFavourites(
      favourites.filter((item) => item.id !== id)
    );
  }

  function toggleFavourite(trip) {
    const alreadyAdded = favourites.some(
      (item) => item.id === trip.id
    );

    if (alreadyAdded) {
      removeFavourite(trip.id);
    } else {
      addFavourite(trip);
    }
  }

  return (
    <TravelContext.Provider
      value={{
        favourites,
        addFavourite,
        removeFavourite,
        toggleFavourite
      }}
    >
      {children}
    </TravelContext.Provider>
  );
}

export function useTravel() {
  return useContext(TravelContext);
}

export default TravelProvider;