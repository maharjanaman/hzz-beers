import { useMyBeersStore } from "../store";

const useMyBeersFacade = () => {
  const { beers, addBeer } = useMyBeersStore((state) => ({
    beers: state.beers,
    addBeer: state.addBeer,
  }));

  return { beers, addBeer };
};

export default useMyBeersFacade;
