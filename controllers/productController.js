const { Router } = require('express');
const productService = require('../services/productService.js');
const { validateProduct } = require('./helpers/productHelpers.js')

const router = Router();

router.get('/', (req, res) => {
    let products = productService.getAll();
    res.render('home', { title: 'Browse', products });
});

router.get('/create', (req, res) => {
    res.render('create', { title: 'Create' });
});

router.post('/create', validateProduct, (req, res) => {
    console.log(req.body);

    //TODO: validate inputs
    // if(req.body.name.length) {

    // }
    productService.create(req.body, (err) => {
        if (err) {
            return res.status(500).end();
        }

        productService.create(req.body);

        res.redirect('/products');
    });
});

router.get('/details/:productId', (req, res) => {
    console.log(req.params.productId);
    let product = productService.getOne(req.params.productId);

    res.render('details', { title: 'Product Details', product });
});



module.exports = router;