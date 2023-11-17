const express = require('express');
const app = express();
const productController = require('../controller/product.controller');
const router = express.Router();
router.get('/',productController.getProduct);
router.post('/',productController.addProduct);

module.exports = router;