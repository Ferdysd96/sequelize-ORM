'use strict'
require('dotenv').config();
const jwt = require('jsonwebtoken');
const moment = require('moment');

module.exports = async (req, res, next) => {
    try {
        const { authorization } = req.headers;

        await jwt.verify(authorization, process.env.secret_key);
        const payload = await jwt.decode(authorization);
        req.user = await payload;
        next();

    } catch (e) {
        return res.status(401).json({ success: false, message: 'You most be logged!' });
    }
}