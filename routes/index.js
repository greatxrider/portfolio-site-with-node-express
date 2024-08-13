const express = require('express');
const mainRouter = express.Router();
const { projects } = require('../data/data.json');

mainRouter.get('/', (req, res) => {
    res.render('index', { projects });
});

module.exports = mainRouter;
