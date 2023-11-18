const express =require('express');
const router = express.Router();
const bookController = require('../controller/book-controller');

router.get('/:id', bookController.getBookById);
router.get('/', bookController.getBooks);
router.post('/', bookController.addBook);
router.delete("/:id", bookController.deleteBookById);
module.exports = router;