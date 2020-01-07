const express = require('express');

const router = express.Router();

const Product = require('../models/product');

router.get('/', async (req, res) => {
    try {
        const posts = await Product.find()
        res.json(posts)
    }catch (e) {
        console.trace(e)
    }
});

router.post('/', async (req, res) => {
    const product = new Product({
        title:req.body.title,
        price:req.body.price,
        description:req.body.description
    });

   let data = await product.save();

    try {
        res.json(data)
    }catch (e) {
        console.trace(e)
    }

});

module.exports = router;
