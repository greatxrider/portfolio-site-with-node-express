const express = require('express');
const projectRouter = express.Router();

projectRouter.get('/', (req, res, next) => {
    res.render('projects');
});

projectRouter.get('/:id', (req, res, next) => {
    res.render('projects');
});

module.exports = projectRouter;
