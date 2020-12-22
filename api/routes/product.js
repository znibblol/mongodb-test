const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/', (req, res) => {
    Product.find({}, function(err, products) {
        var prodMap = {};
    
        products.forEach(function(product) {
          prodMap[product._id] = product;
        });
    
        res.json(prodMap);  
      });
});

router.post('/', (req, res) => {
  let prod = new Product(req.body);
  console.log(req.body);
  let newProd = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price
  }
  console.log(newProd);
  // prod.save((err) => {
  //   if(err) console.error(err);
  //   res.json({message: 'Product saved'});
  // });
});

module.exports = router;