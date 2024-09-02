const { getAll, create, getOne, remove, update } = require('../controllers/aspirant.controllers');
const express = require('express');

const aspirantRouter = express.Router();

aspirantRouter.route('/aspirants')
    .get(getAll)
    .post(create);

aspirantRouter.route('/aspirants/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = aspirantRouter;