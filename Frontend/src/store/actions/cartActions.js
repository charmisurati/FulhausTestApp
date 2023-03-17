//action Creator

import { CartActions } from "../reducers/cartReducer";
import axios from 'axios';


export const AddItemToCart = (product) => {
    return async (dispatch) => {
        // const response = await axios.get('https://fh-api-dev.herokuapp.com/api/products-service/products/website/CAD?page=0&limit=6')

        const data = {
            product: product.id,
            qty: product.quantity,
            price: product.price
        }
        const response = await axios.post('/api/v1/cart/', data);
        console.log("resp", response);
        dispatch(CartActions.addUpdateItemToCart(product))
    }
}

export const GetCartData = () => {
    return async (dispatch) => {
        // const response = await axios.get('https://fh-api-dev.herokuapp.com/api/products-service/products/website/CAD?page=0&limit=6')

        const response = await axios.get('/api/v1/cart/');
        // console.log("resp cart data", response);

        if (response.data.status === "success") {
            dispatch(CartActions.loadCartData(response.data.data));
        }
        // dispatch(CartActions.addUpdateItemToCart(product))
    }
}
export const DeleteItemToCart = (product) => {
    return async (dispatch) => {

        const response = await axios.delete(`/api/v1/cart/${product.id}`);

        if (response.data.status === "success") {
            dispatch(CartActions.removeItemFromCart(product))
        }

    }
}
