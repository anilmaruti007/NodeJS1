const express = require('express');

const Path = require('path')

const router = express.Router();

router.get('/', (req,res,next) => {
    res.sendFile(Path.join(__dirname, '../', 'views', 'shop.html'));
})

module.exports = router;