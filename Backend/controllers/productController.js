const mongoose = require('mongoose');
const ProductModel = require('../Model/ProductModel');

exports.getAllProducts = async (req, res, next) => {
    try {
        let result = await ProductModel.find();
        res.status(200).json({
            status: 'success',
            results: result.length,
            data: result
        });
    } catch (error) {
        next(error)
    }
};
