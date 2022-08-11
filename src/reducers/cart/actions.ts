/* eslint-disable no-unused-vars */
import { Coffee } from "./reducer";

export enum ActionTypes {
  ADD_NEW_ITEM = "ADD_NEW_ITEM",
  REMOVE_ITEM = "REMOTE_ITEM",
  ALTER_QUANTITY = "ALTER_QUANTITY"
}

export function addNewItemToCartAction(item: Coffee) {
  return {
    type: ActionTypes.ADD_NEW_ITEM,
    payload: {
      item
    }
  };
}

export function removeItemFromCartAction(itemName: string) {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: {
      itemName
    }
  };
}

export function alterQuantityAction(itemName: string, newQuantity: number) {
  return {
    type: ActionTypes.ALTER_QUANTITY,
    payload: {
      itemName,
      newQuantity
    }
  };
}
