import { configureStore } from "@reduxjs/toolkit"
import CartSlice from "./reducers/cartReducer"
import ProductSlice from "./reducers/productActions";

//Slice
export const CART = "cart";
export const PRODUCT = "product";


const store = configureStore({
    reducer: {
        [CART]: CartSlice.reducer,
        [PRODUCT]: ProductSlice.reducer,
    }
})

export default store