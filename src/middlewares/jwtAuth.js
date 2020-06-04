'use strict'
require('dotenv').config();
const jwt = require('jwt-simple');
const moment = require('moment');

module.exports = async (req, res, next) => {
    try {
        const { authorization } = req.headers;
        const payload = await jwt.decode(authorization, process.env.secret_key);

        if (payload.exp <= moment().unix()) {
            res.status(401).json({ success: false, message: 'Token has expired' });
        } else {
            req.user = await payload;
            next();
        }
    } catch (e) {
        return res.status(401).json({ success:false, message:'You most be logged!' });
    }
}