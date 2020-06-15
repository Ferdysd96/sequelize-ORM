'use strict'
const model = require('../database/models').user;
const bcrypt = require('bcrypt');
const jwt = require('../helpers/jwtPayload');
const { Op } = require("sequelize");

const countryController = {

    getAll: async (req, res) => {
        try {
            const data = await model.findAll();
            res.status(200).json({ success: true, data });
        }
        catch (error) {
            res.status(500).json({ success: false, message: 'Something went wrong!', error: error.message });
        }
    },

    getById: async (req, res) => {
        try {
            const id = req.params.id;
            const data = await model.findByPk(id);
            res.status(200).json({ success: true, data });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Something went wrong!', error: error.message });
        }
    },

    store: async (req, res) => {
        try {
            const { name, surname, email, password, telephone, role_id, status } = req.body;

            const userData = await model.findOne({ where: { email: email.toLowerCase() } });
            if (userData) {
                res.status(500).json({ success: false, message: 'User is taken already!' });
            } else {
                const encriptPassword = await bcrypt.hash(password, 10);

                const data = await model.create({
                    name,
                    surname,
                    email: email.toLowerCase(),
                    password: encriptPassword,
                    telephone,
                    role_id,
                    status
                });

                data.password = undefined;
                res.status(200).json({ success: true, message: 'Data was saved', data });
            }

        } catch (error) {
            res.status(500).json({ success: false, message: 'Something went wrong!', error: error.message });
        }
    },

    update: async (req, res) => {
        try {
            const id = req.params.id;
            const { name, surname, email, password, telephone, role_id, status } = req.body;
            const userData = await model.findOne({ where: { email: email.toLowerCase(), id: { [Op.ne]: id } } });

            if (userData) {
                res.status(500).json({ success: false, message: 'User is taken already!' });
            } else {

                const encriptPassword = await bcrypt.hash(password, 10);
                const affected = await model.update({
                    name,
                    surname,
                    email: email.toLowerCase(),
                    password: encriptPassword,
                    telephone,
                    role_id,
                    status
                }, {
                    where: { id },
                });

                if (affected == 0) {
                    res.status(404).json({ success: false, message: 'Something went wrong!', error: 'Invalid id' });
                } else {
                    res.status(200).json({ success: true, message: 'Data was saved' });
                }
            }
        } catch (error) {
            res.status(500).json({ success: false, message: 'Something went wrong!', error: error.message });
        }
    },

    login: async (req, res) => {
        try {

            let { email, password, getToken } = req.body;

            const userData = await model.findOne({ where: { email }, attributes: { include: ['password'] }, });

            if (!userData) {
                res.status(404).json({ success: false, message: 'Email or password is wrong!' });
            }
            else {
                if (userData.status == 1) {
                    res.status(401).json({ success: false, message: 'User is cancelled!' });
                } else {
                    const match = await bcrypt.compare(password, user.password);

                    if (match) {
                        if (getToken) {
                            const token = await jwt.createToken(user);
                            res.status(200).json({ success: true, token });
                        } else {
                            userData.password = undefined;
                            res.status(200).json({ success: true, identity: userData });
                        }
                    } else {
                        res.status(404).json({ success: false, message: 'Email or password is wrong!' });
                    }
                }

            }
        } catch (error) {
            res.status(500).json({ success: false, message: 'Something went wrong!', error: error.message });
        }
    },


    //Developing....
    uploadImage: async (req, res) => {
        try {

            res.status(200).json({ success: true, message: 'Data was saved' });

        } catch (error) {
            res.status(500).json({ success: false, message: 'Something went wrong!', error: error.message });
        }
    },

    //Developing....
    getImage: (req, res) => {
        try {
            res.status(200).json({ success: true, message: 'Data was saved' });

        } catch (error) {
            res.status(500).json({ success: false, message: 'Something went wrong!', error: error.message });
        }
    }
};

module.exports = countryController;


