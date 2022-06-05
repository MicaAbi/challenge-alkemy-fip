const express = require('express');
const router = express.Router();
const apiUsersController = require('../../controllers/api/apiUsersController');

router.post('/login', apiUsersController.login);
router.post('/register', apiUsersController.register);

module.exports = router;