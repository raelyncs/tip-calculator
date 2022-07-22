import { createSelector } from "reselect";

/*
functions that will pull each of those parts of the state tree off of our redux state. 

createSelector takes 2 arguments, array of functions similar to the array in useMemo, and a fn to compute the new value. 

If the return values of these function are unchanged it'll give you the same value as last by skipping the "expensive" computation

*/
export const selectItem = (state, props) => {
    return state.items.find((item) => item.uuid === props.uuid);
};

export const selectItemTotal = createSelector(
    [selectItem],
    item => item.price * item.quantity
)


export const selectItems = (state) => state.items;
export const selectTipPercentage = (state) => state.tipPercentage;

// this will only do the math once unless the items in the array change
export const selectSubtotal = createSelector(
    [selectItems],
    items => items.reduce((sum, item) => sum + item.price * item.quantity, 0)
)

export const selectTipAmount = createSelector(
    [selectSubtotal, selectTipPercentage], 
    (subtotal, tipPercentage) => subtotal * (tipPercentage / 100)
);

export const selectTotal = createSelector(
    [selectSubtotal, selectTipAmount],
    (subtotal, tipAmount) => subtotal + tipAmount
);
