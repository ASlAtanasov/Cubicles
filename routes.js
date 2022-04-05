
//const Router = require('express').Router;
//const express = require('express');

const { Router } = require('express');

const  productController = require('./controllers/productController.js');
const  aboutController = require('./controllers/aboutController.js');

const router = Router(); 

router.use('/about', aboutController);
router.use('/', productController);
router.get('*', (req, res) => {
    res.render('404');
});

module.exports = router;