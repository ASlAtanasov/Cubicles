const { Router } = require('express');
const productService = require('../services/productService.js');
const router = Router();

router.get('/', (req, res) => {
    res.render('home', { title: 'Browse' });
});

router.get('/create', (req, res) => {
    res.render('create', { title: 'Create' });
});

router.get('/details/:productId', (req, res) => {
    res.render('details', { title: 'Product Details' });
});

router.post('/create', (req, res) => {
    console.log(req.body);

    //validate inputs
    // if(req.body.name.length) {

    // }

    productService.create(req.body)

    res.redirect('/products');
});

module.exports = router;