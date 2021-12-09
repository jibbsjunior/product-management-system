const express = require('express');
const { signup, login } = require('../controllers/userController');


const Router = express.Router();

/**
 * @route 'user/signup'
 * @method post
 * @access public
 */
Router.post('/user/register', signup);


/**
 * @route 'user/login'
 * @method post
 * @access public
 */
Router.post('/user/login', login);



module.exports = Router;