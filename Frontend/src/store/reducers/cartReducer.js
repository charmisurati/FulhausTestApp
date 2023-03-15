import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    totalItem: 0,
    totalAmount: 0
}

const CartSlice = createSlice({
    name: "cartSlice",
    initialState: initialState,
    reducers: {
        addUpdateItemToCart(state, action) {
            const newItem = action.payload;
            const existItem = state.cart.find(item => item.id === newItem.id);

            state.totalAmount += newItem.price;
            if (!existItem) {
                state.totalItem++;
                state.cart = state.cart.concat({
                    id: newItem.id,
                    title: newItem.title,
                    quantity: 1,
                    price: newItem.price,
                    totalprice: newItem.price,
                })
            }
            else {
                existItem.quantity++;
                existItem.totalprice += newItem.price;
            }
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            const existItem = state.cart.find(item => item.id === id);

            if (existItem) {
                state.totalItem--;
                state.totalAmount += existItem.price;
                if (existItem.quantity === 1) {
                    state.cart = state.cart.filter(item => item.id !== id);
                }
                else {
                    existItem.quantity--
                    existItem.totalprice -= existItem.price
                }
            }
        },
        deleteItemFromCart(state, action) {
            const id = action.payload;
            const existItem = state.cart.find(item => item.id === id);
            if (existItem) {
                state.cart = state.cart.filter(item => item.id !== id);
                state.totalAmount -= existItem.price * existItem.quantity
            }
        },
        loadCartData(state, action) { },
    }
})


export const CartActions = CartSlice.actions
export default CartSlice