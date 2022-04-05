const uniqid = require('uniqid');
const Cube = require('../models/cube.js');
const fs = require('fs');
let productsData = require('../config/products.json');
const path = require('path');

function getAll() {
    return productsData;
};

function create(data) {
   

    let cube = new Cube(
        uniqid(), data.name,
        data.description,
        data.imageUrl,
        data.difficultyLevel
    );

    productsData.push(cube);

        // по-добре да се използва библиотеката path за указване на пътя, а не __dirname
    fs.writeFile(__dirname + '/../config/products.json', JSON.stringify(productsData), (err) =>{
        if(err) {
            console.log(err);
            return;
        }
    });
};

module.exports = {
    create,
    getAll,
};