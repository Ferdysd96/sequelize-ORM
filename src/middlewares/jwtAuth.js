'use strict'
require('dotenv').config();
const jwt = require('jsonwebtoken');
const moment = require('moment');

module.exports = async (req, res, next) => {
    try {
        const { authorization } = req.headers;

        await jwt.verify(authorization, process.env.secret_key);
        req.user = await jwt.decode(authorization);
        next();

    } catch (e) {
        return res.status(401).json({ success: false, message: 'You most be logged!' });
    }
}