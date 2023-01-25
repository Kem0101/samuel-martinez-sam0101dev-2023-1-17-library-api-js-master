'use strict';


const Book = require('../models/book');
const faker = require('faker');


// show books list
async function getBooks(req, res) {

  try {
    const books = await Book.find();
    const booksList = books.map(book => `${book.bookname}`);
    const total = books.length;

    return res.json({ total, booksList });
  } catch (error) {
    console.log(error);
  }
}


// show a single book
async function getBook(req, res) {
  let {id, page, format} = req.params;
 
  
  const book = await Book.findById(id);

  if(page && format == 'html'){
    let title = book.bookname;
    let result = await book.body.filter(bookPage => bookPage.page == page)
    return res.send(`<h1> ${title} </h1> <div> ${result} </div>`)

  }else if(page){
    let title = book.bookname;
    let result = await book.body.filter(bookPage => bookPage.page == page)
    return res.send({ title, result })
  }else {
    
    return  res.send({ book })
  }
  
}



// // generate data (seeder)
// this method let me generate data and post it to the database if it want to, but for data structure reason 
// i prefer add some example records to test the methods of visualize the books from the database

async function generateData(req, res){
    try {
      for(let i = 1; i <= 20; i++){
        if(i == 1){
            var fakeData = new Book({
            bookname:faker.name.title(),
            body: [{
              content:faker.lorem.paragraphs(),
              page: i
            }]
          })
        }else{
            var fakeData = new Book({
            bookname:faker.lorem.word(),
            body: [{
              content:faker.lorem.paragraphs(),
              page: i
            }]
          });
        }
        
        const savedBook = await fakeData.save();
        res.json(savedBook);
      }
      
    } catch (error) {
      console.log(error);
    }
}


module.exports = {
  getBooks,
  getBook,
  // generateData 
};




