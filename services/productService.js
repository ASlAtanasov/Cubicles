const uniqid = require('uniqid');
const Cube = require('../models/cube.js');
const fs = require('fs');
const path = require('path');

let productsData = require('../config/products.json');

function getAll() {
    return productsData;
};

function getOne(id) {
    console.log(productsData);
    return productsData.find(x => x.id == id);
};

function create(data, callback) {
    let cube = new Cube(
        uniqid(),
        data.name,
        data.description,
        data.imageUrl,
        data.difficultyLevel
    );

    productsData.push(cube);

    path.join(__dirname, '/../config/products.json')

    // по-добре да се използва библиотеката path за указване на пътя, а не __dirname
    // fs.writeFile(__dirname + '/../config/products.json', JSON.stringify(productsData), (err) => {
    fs.writeFile(
        path.join(__dirname, '../config/products.json'),
        JSON.stringify(productsData),
        callback
    );
};

module.exports = {
    create,
    getAll,
    getOne,
};