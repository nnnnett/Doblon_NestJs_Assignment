const express = require('express');
const router = express.Router();
const { calculateFactorial } = require('../controller/assignment3_controller');

router.get('/factorial/:number', calculateFactorial);

module.exports = router;
