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
                    imageURL: newItem.imageURL
                })
            }
            else {
                existItem.quantity++;
                existItem.totalprice += newItem.price;
            }
        },

        removeItemFromCart(state, action) {
            console.log("action", action);
            const id = action.payload.id;
            const existItem = state.cart.find(item => item.id === id);
            if (existItem) {
                state.totalItem--;
                state.totalAmount -= existItem.price;

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
        loadCartData(state, action) {
            const newItem = action.payload;

            let Amount = 0;
            let quantity = 0;
            let cart = [];

            if (newItem) {
                newItem.map((v, i) => {
                    // debugger;
                    Amount += (v.price * v.qty);
                    quantity++;
                    cart = cart.concat({
                        id: v.product._id,
                        title: v.product.productName,
                        quantity: v.qty,
                        price: v.price,
                        imageURL: v.product.imageUrls[0]
                    })
                })


                state.totalAmount = Amount;
                state.totalItem = quantity;
                state.cart = cart;
            }
        },
    }
})


export const CartActions = CartSlice.actions
export default CartSlice