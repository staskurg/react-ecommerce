import { TYPES } from 'redux/constants'

export const toggleCartHidden = () => ({
  type: TYPES.TOGGLE_CART_HIDDEN,
})

export const addItem = (item) => ({
  type: TYPES.ADD_ITEM,
  payload: item,
})

export const removeItem = (item) => ({
  type: TYPES.REMOVE_ITEM,
  payload: item,
})

export const clearItemFromCart = (item) => ({
  type: TYPES.CLEAR_ITEM_FROM_CART,
  payload: item,
})
