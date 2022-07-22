import produce from 'immer';
import { ITEM_ADDED, ITEM_REMOVED, ITEM_PRICE_UPDATED, ITEM_QUANTITY_UPDATED } from './actions';

let id = 1;

export const initialItems = [
  { uuid: id++, name: 'Awesome Tofu Roast', price: 14, quantity: 1 },
  { uuid: id++, name: 'Vegan Ham Sammie', price: 12, quantity: 1 }
];

export const reducer = produce((state = initialItems, action) => {

  if (action.type === ITEM_ADDED) {
    const item = { uuid: id++, quantity: 1, ...action.payload };
    state.push(item)
  }

  if (action.type === ITEM_REMOVED) {
    //immutably get something out of array - filter
    return state.filter(item => item.uuid !== action.payload.uuid);
  }

  if (action.type === ITEM_PRICE_UPDATED) {
      const item = state.find((item) => item.uuid === action.payload.uuid)
      item.price = parseInt(action.payload.price, 10)
  }
  
  if (action.type === ITEM_QUANTITY_UPDATED) {
      const item = state.find((item) => item.uuid === action.payload.uuid)
      item.quantity = parseInt(action.payload.quantity, 10)
  }
}, initialItems);

export default reducer;

/*
reducers job is to find out what a thing that happened means, so if you want to put default values here is where you should do it, not in actions
*/