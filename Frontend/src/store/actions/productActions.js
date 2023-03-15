//action Creator

import axios from "axios";
import { ProductActions } from "../reducers/productActions";

export const GetCartData = () => {
    return async (dispatch) => {
        const response = await axios.get('https://fh-api-dev.herokuapp.com/api/products-service/products/website/CAD?page=0&limit=6')
        if (response && Boolean(response?.data?.success)) {
            dispatch(ProductActions.LoadProduct(response.data.data))
        }
    }
}