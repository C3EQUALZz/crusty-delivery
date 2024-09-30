import React, { createContext } from "react";
import {food_list, FoodItem} from "../assets/assets.ts";

interface StoreContextValue {
  food_list: FoodItem[];
}

export const StoreContext = createContext<StoreContextValue | null>(null);

const StoreContextProvider = (props: { children: React.ReactNode }) => {
  const contextValue: StoreContextValue = {
    food_list
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;