'use strict'
const model = require('../models/country');

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
            const { description, demonym, status } = req.body;

            const data = await model.create({
                description,
                demonym,
                status
            });

            res.status(200).json({ success: true, message: 'Data was saved', data });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Something went wrong!', error: error.message });
        }
    },

    update: async (req, res) => {
        try {
            const id = req.params.id;
            const { description, demonym, status } = req.body;

            const data = await model.update({
                description,
                demonym,
                status
            },
                {
                    where: { id },
                });

            if (data == 0) {
                res.status(404).json({ success: false, message: 'Something went wrong!', error: 'Invalid id' });
            } else {
                res.status(200).json({ success: true, message: 'Data was saved' });
            }

        } catch (error) {
            res.status(500).json({ success: false, message: 'Something went wrong!', error: error.message });
        }
    }
};

module.exports = countryController;