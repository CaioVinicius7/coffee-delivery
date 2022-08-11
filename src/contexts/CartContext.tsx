import { createContext, ReactNode, useReducer } from "react";

import {
  addNewItemToCartAction,
  removeItemFromCartAction,
  alterQuantityAction
} from "../reducers/cart/actions";

import { cartReducers } from "../reducers/cart/reducer";

interface CoffeeSummary {
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

interface CartContextType {
  items: CoffeeSummary[];
  itemsQuantity: number;
  addNewItemToCart: (item: CoffeeSummary) => void;
  removeItemFromCart: (itemName: string) => void;
  getItemInfosByName: (itemName: string) => CoffeeSummary | any;
  alterItemQuantity: (itemName: string, newQuantity: number) => void;
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

  function addNewItemToCart(item: CoffeeSummary) {
    dispatch(addNewItemToCartAction(item));
  }

  function removeItemFromCart(itemName: string) {
    dispatch(removeItemFromCartAction(itemName));
  }

  function getItemInfosByName(itemName: string) {
    return items.find((coffee) => coffee.name === itemName);
  }

  function alterItemQuantity(itemName: string, newQuantity: number) {
    dispatch(alterQuantityAction(itemName, newQuantity));
  }

  return (
    <CartContext.Provider
      value={{
        items,
        itemsQuantity,
        addNewItemToCart,
        removeItemFromCart,
        getItemInfosByName,
        alterItemQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
