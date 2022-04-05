
//const Router = require('express').Router;
//const express = require('express');

const { Router } = require('express');

const  productController = require('./controllers/productController.js');
const  homeController = require('./controllers/homeController.js');

const router = Router(); 

router.use('/', homeController);
router.use('/products', productController);
router.get('*', (req, res) => {
    res.render('404');
});

module.exports = router;
