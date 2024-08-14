const express = require('express');
const mainRouter = express.Router();
const { projects } = require('../data/data.json');

/**
 * Route to render the main index page with projects data
**/
mainRouter.get('/', (req, res) => {
    res.render('index', { projects });
});

module.exports = mainRouter;
