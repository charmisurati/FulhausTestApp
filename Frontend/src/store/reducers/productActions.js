import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    products: [],
}

const ProductSlice = createSlice({
    name: "PRODUCT_SLICE",
    initialState: initialState,
    reducers: {
        LoadProduct(state, action) {
            state.products = action.payload
        }
    }
})


export const ProductActions = ProductSlice.actions
export default ProductSlice