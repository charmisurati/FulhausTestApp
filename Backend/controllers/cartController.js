const fs = require('fs');
const mongoose = require('mongoose');
const CartModel = require('../Model/CartModel');

exports.checkID = async (req, res, next, val) => {
    try {
        const tour = await CartModel.findById(val);
        if (tour) {
            next();
        }
        else {
            res.status(400).json({
                status: "fail",
                data: {
                    message: "Tour not found"
                },
            });
        }
    } catch (error) {
        next(error);
    }
};

exports.getAllCartItems = async (req, res, next) => {
    try {
        const result = await CartModel.find().populate("product")
        res.status(200).json({
            status: 'success',
            data: result
        });
    } catch (error) {
        next(error)
    }
};

exports.getCart = async (req, res, next) => {
    try {
        const result = await CartModel.find()

        res.status(200).json({
            status: 'success',
            data: {
                result
            }
        });
    } catch (error) {
        next(error)
    }
};

// exports.createCartItem = async (req, res, next) => {
//     try {
//         const result = await CartModel.create(req.body);
//         res.status(200).json({
//             status: 'success',
//             data: {
//                 result
//             }
//         });
//     } catch (error) {
//         next(error)
//     }
// };

exports.createCartItem = async (req, res, next) => {
    try {
        console.log(req.body);
        const existingProduct = await CartModel.findOne({ product: new mongoose.Types.ObjectId(req.body.product) });
        console.log(existingProduct);
        if (existingProduct) {
            const result = await CartModel.findByIdAndUpdate(existingProduct._id, { qty: existingProduct.qty + 1 });
            res.status(200).json({
                status: 'success',
                data: {
                    result
                }
            });
        }
        else {
            const result = await CartModel.create(req.body);
            res.status(200).json({
                status: 'success',
                data: {
                    result
                }
            });
        }

    } catch (error) {
        next(error)
    }
};

exports.updateCartItem = async (req, res, next) => {
    try {
        const result = await CartModel.updateOne({ _id: req.params.id }, { $set: req.body }, {
            runValidators: false
        });

        res.status(200).json({
            status: 'success',
            data: {
                result
            }
        });
    } catch (error) {
        next(error);
    }
};

exports.deleteCartItem = async (req, res, next) => {
    try {
        const result = await CartModel.deleteOne({ product: new mongoose.Types.ObjectId(req.params.id) })
        res.status(200).json({
            status: 'success',
            data: {
                result
            }
        });
    } catch (error) {
        next(error)
    }
};
