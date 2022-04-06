const uniqid = require('uniqid');
const Cube = require('../models/cube.js');
const fs = require('fs/promises');
const path = require('path');
const productData = require('../data/productData.js');

function getAll(query) {
    let products = productData.getAll();

    if (query.search) {
        products = products.filter(x => x.name.toLowerCase().includes(query.search));
    }

    if (query.from) {
        products = products.filter(x => Number(x.level) >= query.from)
    }

    if (query.to) {
        products = products.filter(x => Number(x.level) <= query.to)
    }

    return products;
};

function getOne(id) {
    console.log(productsData);
   // return productsData.find(x => x.id == id);
    return productData.getOne(id);
};

function create(data, /* callback*/) {
    let cube = new Cube(
        uniqid(),
        data.name,
        data.description,
        data.imageUrl,
        data.difficultyLevel
    );

    // productsData.push(cube);

    // path.join(__dirname, '/../config/products.json')

    // по-добре да се използва библиотеката path за указване на пътя, а не __dirname
    // fs.writeFile(__dirname + '/../config/products.json', JSON.stringify(productsData), (err) => {
    // fs.writeFile(
    //     path.join(__dirname, '../config/products.json'),
    //     JSON.stringify(productsData),
    //     callback
    // );

    // return fs.writeFile(
    //     path.join(__dirname, '../config/products.json'),
    //     JSON.stringify(productsData)
    // )

    return productData.create(cube);
};

module.exports = {
    create,
    getAll,
    getOne,
};