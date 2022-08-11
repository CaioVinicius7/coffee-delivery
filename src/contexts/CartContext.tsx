import { createContext, ReactNode, useReducer } from "react";

import {
  addNewItemToCartAction,
  removeItemFromCartAction,
  alterQuantityAction,
  cleanCartAction
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
  totalValue: {
    itemsValue: number;
    withDelivery: number;
  };
  addNewItemToCart: (item: CoffeeSummary) => void;
  removeItemFromCart: (itemName: string) => void;
  getItemInfosByName: (itemName: string) => CoffeeSummary | any;
  alterItemQuantity: (itemName: string, newQuantity: number) => void;
  cleanCart: () => void;
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

  const itemsValue = cartState.items.reduce((total, element) => {
    return (total += element.price * element.quantity);
  }, 0);

  const totalValue = {
    itemsValue,
    withDelivery: itemsValue + 3.5
  };

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

  function cleanCart() {
    dispatch(cleanCartAction());
  }

  return (
    <CartContext.Provider
      value={{
        items,
        itemsQuantity,
        totalValue,
        addNewItemToCart,
        removeItemFromCart,
        getItemInfosByName,
        alterItemQuantity,
        cleanCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
