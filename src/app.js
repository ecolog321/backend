const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');

dotenv.config();

const userRoutes = require('./routes/users');
const bookRoutes = require('./routes/books');
const { errorHandler } = require('./middleware/errorMiddleware');
const { loggerMiddleware } = require('./middleware/loggerMiddleware');

const app = express();



// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(loggerMiddleware);

// Routes
app.use('/api/users', userRoutes);
app.use('/api/books', bookRoutes);

// Error Handling Middleware
app.use(errorHandler);

module.exports = app;