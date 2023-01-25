'use strict';

const mongoose = require('mongoose');

const BooksSchema = new mongoose.Schema({
  bookname: {
    type: String,
    required: true,
  },
  body: [
    {
      content: {
       type: String,
      },
      page: {
       type: Number
      }  
     },
  ]
 
});

const Book = mongoose.model('Book', BooksSchema);
module.exports = Book
