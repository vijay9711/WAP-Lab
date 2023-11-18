const path = require('path');

const fs = require("fs"); 
var db;
var bookDB;
function loadData(data){
  db = data;
  bookDB = data[0].books;
  console.log('loaddata ',db);
}
getBookDB = () => {
  fs.readFile('./db/db.json', readFileCallback = (err, data) => {
    
    if (err) {
        console.log(err);
    }else{
      loadData(JSON.parse(data));
      console.log('readfile ',JSON.parse(data));
    }
  });
}
function updateBookDB(obj){
  let json = JSON.stringify(obj);
  fs.writeFile('./db/db.json', json,function(err) {
    if (err) throw err;
      console.log('complete');
    }
  );
  getBookDB();
}
getBookById = (req, res) => {
  getBookDB();
  console.log("getBookById ",db);
  // db[0].books = [];
  let response;
  let id = req.params.id;
  if(bookDB){
    let book = bookDB.find(x=>x.id == id);
    if(book){
      response = book;
    }else{
      response = `Book not found!!!`;
    }
  }
  updateBookDB(db);
  res.send(response);
}
addBook = (req, res) => {
  getBookDB();
  let newBook = {
    title: req.body.title,
    id: bookDB.length + 1,
    quantity: req.body.quantity,
    author: req.body.author
  } 
  bookDB.push(newBook);
  console.log("book bd ",bookDB);
  db[0].books = bookDB;
  updateBookDB(db);
  res.send(bookDB);
}

getBooks = (req, res) => {
  let response;
  try{
    getBookById();
    response = bookDB;
  }catch(err){
    response = 'Something went wrong please try again!!!';
  }
  res.send(bookDB);
}

deleteBookById = (req, res) => {
  if(bookDB){
    let isBook = bookDB.find(x => x.id == req.params.id);
    console.log("is book ",req.params.id);
    if(isBook){
      let newBook = bookDB.filter(x=> x.id != req.params.id);
      db[0].books = newBook;
      updateBookDB(db);
      res.send(newBook);
    }else{
      res.send("Book not found!!!");
    }
  }else{
    res.send("No books in DB");
  }
  
}
getBookDB();
module.exports = {
  getBookById,
  addBook,
  getBooks,
  deleteBookById
}