'use strict'
const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');

router.route('/')
    .get(controller.getAll)
    .post(controller.store);

router.route('/:id')
    .get(controller.getById)
    .put(controller.update);

//router.post('/:id/image', controller.uploadImage );
//router.get('/:image/image');

module.exports = router;