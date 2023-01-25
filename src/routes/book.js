'use strict';

const express = require('express');
const BookController = require('../controllers/book');


const router = express.Router();

  
// router.post('/data', BookController.generateData);
router.get('/books/:page?', BookController.getBooks);
router.get('/book/:id/:page?/:format?', BookController.getBook);


module.exports = router; 