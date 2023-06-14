import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface Beer {
  name: string;
  tagline: string;
  description: string;
  image?: string;
}

interface MyBeersState {
  beers: Beer[];
  addBeer: (beer: Beer) => void;
}

const useMyBeersStore = create<MyBeersState>()(
  persist(
    (set, get) => ({
      beers: [],
      addBeer: (beer) => set({ beers: [...get().beers, beer] }),
    }),
    {
      name: "my-beers-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useMyBeersStore;
