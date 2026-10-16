const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const connectDB = require('./db/db');

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const captainRoutes = require('./routes/captain.routes');
const rabbitMq = require('./services/rabbit');
rabbitMq.connect();

app.use('/', captainRoutes);

module.exports = app;