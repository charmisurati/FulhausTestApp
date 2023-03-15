//action Creator

import axios from "axios";
import { CartActions } from "../reducers/cartReducer";

export const AddItemToCart = (product) => {
    return async (dispatch) => {
        // const response = await axios.get('https://fh-api-dev.herokuapp.com/api/products-service/products/website/CAD?page=0&limit=6')
        dispatch(CartActions.addUpdateItemToCart(product))
    }
}