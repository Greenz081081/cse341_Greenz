// eslint-disable-next-line semi
const express = require('express');
// eslint-disable-next-line semi
const router = express.Router();

// eslint-disable-next-line semi
router.use('/contacts', require('./contacts'));

module.exports = router
