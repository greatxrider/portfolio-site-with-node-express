const express = require('express');
const projectRouter = express.Router();
const { projects } = require('../data/data.json');

const getProjectById = (dataArray, id) => {
    const idNumber = parseInt(id);
    return dataArray.find((data) => data.id === idNumber); // Added return statement
}

projectRouter.get('/', (req, res, next) => {
    res.render('projects');
});

projectRouter.get('/:id', (req, res, next) => {
    const project = getProjectById(projects, req.params.id);
    res.render('projects', { project });
});

module.exports = projectRouter;
