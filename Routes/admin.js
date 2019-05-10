const express = require('express');

const Path = require('path');

const router = express.Router();

router.get('/add-product', (req,res,next) => {
    res.sendFile(Path.join(__dirname, '../', 'views', 'add-product.html'));
})

router.post('/add-product', (req,res,next) => {
    console.log(req.body)
    res.redirect('/');
})

module.exports = router; 