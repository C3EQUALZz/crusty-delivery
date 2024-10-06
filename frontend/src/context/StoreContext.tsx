import React, { createContext, useState } from "react";
import { FoodItem, food_list } from "../assets/assets.ts";

interface StoreContextValue {
  foodList: FoodItem[];
  cartItems: Record<string, number>;
  addToCart: (itemId: string) => void;
  removeFromCart: (itemId: string) => void;
  getTotalCartAmount: () => number;
}

const defaultContextValue: StoreContextValue = {
  foodList: [],
  cartItems: {},
  addToCart: () => {},
  removeFromCart: () => {},
  getTotalCartAmount: () => 1
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

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {

        let itemInfo = food_list.find((product) => product._id === item);

        if (itemInfo !== undefined) {
          totalAmount += itemInfo.price * cartItems[item];
        }

      }
    }
    return totalAmount;
  }

  const contextValue: StoreContextValue = {
    foodList: food_list,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
