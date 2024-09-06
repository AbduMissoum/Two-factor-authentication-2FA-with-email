const router = require('express').Router();
const login= require('../controllers/auth/login');
const logout = require('../controllers/auth/logout');
const register= require('../controllers/auth/register');
const verify= require('../controllers/auth/verify');
  
 
router.post('/login',login)
router.post('/register',register);
router.post('/verify',verify);
router.post('/logout',logout)
module.exports=router