const express = require('express');
const router = express.Router();

const { createRegister, getRegisterPage,
    getLoginPage, Login, Logout
} = require('../controllers/authController')

router.get('/register', getRegisterPage)
router.post('/create-register', createRegister)
router.get('/login', getLoginPage)
router.post('/login', Login)
router.get('/logout', Logout)

module.exports = router;