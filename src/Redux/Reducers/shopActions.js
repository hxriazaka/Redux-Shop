import * as actionTypes from "./shopTypes"

export const addItem = (itemID) => {
  return {
    type: actionTypes.Add_Item,
    payload: {
      id: itemID
    }
  }
}

export const removeItem = (itemID) => {
  return {
    type: actionTypes.Remove_Item,
    payload: {
      id: itemID
    }
  }
}

export const loadCurrentItem = (item) => {
  return {
    type: actionTypes.Load_Current_Item,
    payload: item,
  }
}