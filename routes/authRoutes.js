const router = require('express').Router();
const login= require('../controllers/auth/login');
const logout = require('../controllers/auth/logout');
const register= require('../controllers/auth/register');
const verify= require('../controllers/auth/verify');
  const resendVerificationCode  =require('../controllers/auth/resendVerificationCode.js')
 
router.post('/login',login)
router.post('/register',register);
router.post('/verify',verify);
router.post('/logout',logout)
router.post('/resend-code',resendVerificationCode)
module.exports=router