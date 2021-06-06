const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');

router.post('/register',authController.register);

router.post('/login',authController.login);

router.post('/logout',authController.logout);

router.post('/addbook', authController.addbook);

router.post('/bookrequest', authController.bookrequest);

router.post('/approverequest', authController.approverequest);

router.post('/returnbook', authController.returnbook);

router.post('/denyrequest', authController.denyrequest);

module.exports = router;