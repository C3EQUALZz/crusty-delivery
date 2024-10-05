import React, { createContext, useState } from "react";
import { FoodItem, food_list } from "../assets/assets.ts";

interface StoreContextValue {
  foodList: FoodItem[];
  cartItems: Record<string, number>;
  addToCart: (itemId: string) => void;
  removeFromCart: (itemId: string) => void;
}

const defaultContextValue: StoreContextValue = {
  foodList: [],
  cartItems: {},
  addToCart: () => {},
  removeFromCart: () => {}
};

export const StoreContext = createContext<StoreContextValue>(defaultContextValue);

const StoreContextProvider = (props: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<Record<string, number>>({});

  const addToCart = (itemId: string) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId: string) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const contextValue: StoreContextValue = {
    foodList: food_list,
    cartItems,
    addToCart,
    removeFromCart
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
