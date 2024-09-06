const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');

dotenv.config();

const userRoutes = require('./routes/users');
const bookRoutes = require('./routes/books');
const { errorHandler } = require('./middlewares/error');
const { loggerMiddleware } = require('./middlewares/logger');

const app = express();

const {
    API_URL='127.0.0.1',
    PORT=3005,
    MONGO_URL='mongodb://localhost:27017/mydb'
} = process.env;

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://127.0.0.1:${PORT}`);
    });
})
.catch((error) => {
    console.error('Database connection error:', error);
});

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