import { produce } from "immer";

import { ActionTypes } from "./actions";

export interface Coffee {
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

interface CartState {
  items: Coffee[];
  itemsQuantity: number;
}

type Action = {
  type: string;
  payload?: any;
};

function calcItemsQuantity(items: Coffee[]) {
  return items.reduce((total, element) => {
    return (total += element.quantity);
  }, 0);
}

export function cartReducers(state: CartState, action: Action) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_ITEM: {
      return produce(state, (draft) => {
        draft.items.push(action.payload!.item);
        draft.itemsQuantity = calcItemsQuantity(draft.items);
      });
    }

    case ActionTypes.REMOVE_ITEM: {
      return produce(state, (draft) => {
        const newItemsArray = draft.items.filter(
          (coffee) => coffee.name !== action.payload.itemName
        );

        draft.items = newItemsArray;
        draft.itemsQuantity = calcItemsQuantity(newItemsArray);
      });
    }

    case ActionTypes.ALTER_QUANTITY: {
      return produce(state, (draft) => {
        const newItemsArray = draft.items.map((coffee) => {
          if (coffee.name === action.payload.itemName) {
            coffee.quantity = action.payload.newQuantity;
          }

          return coffee;
        });

        draft.items = newItemsArray;
        draft.itemsQuantity = calcItemsQuantity(newItemsArray);
      });
    }

    case ActionTypes.CLEAN_CART: {
      return produce(state, (draft) => {
        draft.items = [];
        draft.itemsQuantity = 0;
      });
    }

    default: {
      return state;
    }
  }
}
