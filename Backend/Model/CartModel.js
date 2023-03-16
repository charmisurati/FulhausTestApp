const mongoose = require('mongoose');


const CartSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Product',
    },
    price: {
        type: Number,
    },
    qty: {
        type: Number,
        default: 1,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
});

const CartModel = mongoose.model("Cart", CartSchema);
module.exports = CartModel;