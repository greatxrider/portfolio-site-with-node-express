const express = require('express');
const aboutRouter = express.Router();
const { skills } = require('../data/data.json');

/**
 * Route to render the about page
 * */
aboutRouter.get('/', (req, res, next) => {
    res.render('about', { skills });
});

module.exports = aboutRouter;
