// routes/data.js
const express = require('express');
const router = express.Router();
// const Data = require('../models/Data');

// Define your API endpoints for CRUD operations here
router.get('/', getData);
router.post('/', getData);
router.patch('/', getData);
router.delete('/', getData);


module.exports = router;
