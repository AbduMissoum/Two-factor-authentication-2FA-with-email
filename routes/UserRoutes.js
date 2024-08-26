const { register,login } = require('../controllers/UsersControllers/userController');

const router= require('express').Router();
router.route('/login').post(login)
router.post('/register',register)