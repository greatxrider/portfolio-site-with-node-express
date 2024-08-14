const express = require('express');
const aboutRouter = express.Router();

/**
 * Route to render the about page
 * */
aboutRouter.get('/', (req, res, next) => {
    res.render('about');
});

module.exports = aboutRouter;
