const path = require('path');

const fs = require("fs"); 

getProduct = (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '..','view','product.html'));

}
addProduct = (req, res) => {
  console.log('add ',req.body);
  fs.readFile('./db/db.json', function readFileCallback(err, data) {

      if (err) {
          console.log(err);
      } else {
          obj = JSON.parse(data);
          console.log('obj ',obj[0].product);
          obj[0].product.push(req.body);

          let json = JSON.stringify(obj);
          fs.writeFile('./db/db.json', json,function(err) {
            if (err) throw err;
              console.log('complete');
              res.send("product added successfully");
            }
          );
      }
  });
}
module.exports = {
  getProduct,
  addProduct
}