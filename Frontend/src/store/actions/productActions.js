//action Creator

import axios from "axios";
import { ProductActions } from "../reducers/productActions";

export const GetProductData = () => {
    return async (dispatch) => {
        // const response = await axios.get('https://fh-api-dev.herokuapp.com/api/products-service/products/website/CAD?page=0&limit=6')

        const response = await axios.get('/api/v1/products/')
        if (response && Boolean(response?.data?.status === "success")) {

            dispatch(ProductActions.LoadProduct(response.data.data))
        }
    }
}