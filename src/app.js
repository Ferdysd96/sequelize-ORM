'use strict'
require('dotenv').config();
const JwtAuth = require('./middlewares/jwtAuth');
const compression = require('compression');
const express = require('express');
const cors = require('cors');

const app = express();

//Config
app.set('port', parseInt(process.env.app_port) || 4000);

//Middlewares
app.all('/api/*',JwtAuth);
app.use(compression());
app.use(express.json());
app.use(cors());


//Routes
app.get('/', (req, res) => res.send('<h1>Welcome</h1>'));
app.use('/session', require('./routes/session'));
app.use('/api/users', require('./routes/user'));
app.use('/api/countries', require('./routes/country'));
app.use('/api/cities', require('./routes/city'));
app.use('/api/roles', require('./routes/userRol'));

//testing git sourcetree
//lol
//lol2
module.exports = app;
