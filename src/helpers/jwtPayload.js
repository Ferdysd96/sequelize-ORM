'use strict'
require('dotenv').config();
const jwt = require('jwt-simple');
const moment = require('moment');

exports.createToken = (user) => {

    const payload = {
        sub: user.id,
        name: user.name,
        surname: user.surname,
        email: user.email,
        role_id: user.role_id,
        image: user.image,
        iat: moment().unix(),
        exp: moment().add(7, 'days').unix()
    };

  return jwt.encode(payload, process.env.secret_key);
}