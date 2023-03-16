const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    imageUrls: {
        type: [String],
    },
    retailPrice: {
        type: Number,
    },
    productName: {
        type: String,
    },
});

const ProductModel = mongoose.model("Product", ProductSchema);
module.exports = ProductModel;