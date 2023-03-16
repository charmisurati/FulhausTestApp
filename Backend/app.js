const express = require('express');
const app = express();

const cartRouter = require('./routes/cartRoutes');
const productRouter = require('./routes/productRoutes');

app.use(express.json());



// 3) ROUTES
app.use('/api/v1/cart', cartRouter);
app.use('/api/v1/products', productRouter);
app.use("*", (req, res, next) => {
    next();
});

module.exports = app