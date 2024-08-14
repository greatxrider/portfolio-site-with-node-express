const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// Routers
const mainRouter = require('./routes/index');
const aboutRouter = require('./routes/about');
const projectRouter = require('./routes/projects');

// Data
const data = require('./data/data.json');

// Initialize Express Application
const app = express();
const PORT = process.env.PORT || 8000;

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

/**
 * Middleware setup
 */
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * Routers
 */
app.use(mainRouter);
app.use('/about', aboutRouter);
app.use('/projects', projectRouter);

/**
 * Error handling
 * Catches 404 errors and forwards to error handler
 */
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    console.error(`Error ${err.status}: ${err.message}`);
    res.render('page-not-found', { message: err.message, error: err });
});

/**
 * Error handling middleware
 * @param {Error} err - The error object
 * @param {Request} req - The request object
 * @param {Response} res - The response object
 * @param {Function} next - The next middleware function
 */
app.use((err, req, res, next) => {
    err.status = err.status || 500;
    err.message = err.message || 'Internal Server Error';

    console.error(`Error ${err.status}: ${err.message}`);

    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status);
    res.render('error', { message: err.message, error: err });
});

/**
 * Starts the server
 * @param {number} PORT - The port number
 */
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
