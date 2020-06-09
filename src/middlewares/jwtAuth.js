'use strict'
require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
    try {
        const { authorization } = req.headers;
        
        const payload = await jwt.verify(authorization, process.env.secret_key);
        req.user = payload;

        next();

    } catch (e) {
        return res.status(401).json({ success: false, message: 'You most be logged!', error: e.message });
    }
}