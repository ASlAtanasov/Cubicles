const express = require('express');
const handlebars = require('express-handlebars');
const engine = require("express-handlebars").engine;

function setupExpress(app) {
    app.engine('hbs', engine({
        extname: 'hbs'
    }));
    app.set('view engine', 'hbs');
    
    app.use(express.static('public'));

    app.use(express.urlencoded({
        extended: true
    }));
};

module.exports = setupExpress;