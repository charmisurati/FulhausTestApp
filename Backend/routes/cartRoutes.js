const express = require('express');
const cartController = require('./../controllers/cartController');

const router = express.Router();

router
    .route('/')
    .get(cartController.getAllCartItems)
    .post(cartController.createCartItem);

router
    .route('/:id')
    .get(cartController.getCart)
    .patch(cartController.updateCartItem)
    .delete(cartController.deleteCartItem);

module.exports = router