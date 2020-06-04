'use strict'
const express = require('express');
const router = express.Router();
const controller = require('../controllers/userRolController');

router.route('/')
    .get(controller.getAll)
    .post(controller.store);

router.route('/:id')
    .get(controller.getById)
    .put(controller.update);

module.exports = router;