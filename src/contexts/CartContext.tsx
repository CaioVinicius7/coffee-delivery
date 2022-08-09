import { createContext, ReactNode, useReducer } from "react";
import { addNewItemAction } from "../reducers/cart/actions";

import { cartReducers } from "../reducers/cart/reducer";

interface Coffee {
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

interface CartContextType {
  items: Coffee[];
  itemsQuantity: number;
  addNewItem: (item: Coffee) => any;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducers, {
    items: [],
    itemsQuantity: 0
  });

  const { items, itemsQuantity } = cartState;

  function addNewItem(item: Coffee) {
    dispatch(addNewItemAction(item));
  }

  return (
    <CartContext.Provider value={{ items, itemsQuantity, addNewItem }}>
      {children}
    </CartContext.Provider>
  );
}
