const { getAll, create, remove, update, login } = require('../controllers/user.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const routerUser = express.Router();

routerUser.route('/')
    .get(getAll, verifyJWT)
    .post(create);

routerUser.route('/login')
    .post(login)

routerUser.route('/:id')
    .delete(remove, verifyJWT)
    .put(update, verifyJWT);

module.exports = routerUser;