const express = require('express');
const router = express.Router();

//Handle incoming GET request to /products
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /products'
    });
});

//Handle incoming POST request to /products
router.post('/', (req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    }
    res.status(201).json({
        message: 'Handling POST requests to /products',
        createdProduct: product
    });
});

//Handle incoming GET request to /products with /:productId
router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if(id === 'special') {
        res.status(200).json({
            message: 'You discovered the special ID',
            id: id
        });    
    } else {
        res.status(200).json({
            message: 'You passed an ID'
        });
    }
});

//Handle incoming PATCH request to /products with /:productId
router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated product!'
    });
});

//Handle incoming DELETE request to /products with /:productId
router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted product!'
    });
});

module.exports = router;