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
  itemsQuantity: 0;
}

type Action = {
  type: string;
  payload?: {
    item: Coffee;
  };
};

export function cartReducers(state: CartState, action: Action) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_ITEM: {
      return produce(state, (draft) => {
        draft.items.push(action.payload!.item);
        draft.itemsQuantity += action.payload!.item.quantity;
      });
    }

    default: {
      return state;
    }
  }
}
