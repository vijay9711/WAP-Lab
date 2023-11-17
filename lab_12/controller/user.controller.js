const path = require('path');

const fs = require("fs"); 

getUser = (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '..','view','user.html'));

}
addUser = (req, res) => {
  console.log('add ',req.body);
  fs.readFile('./db/db.json', function readFileCallback(err, data) {

      if (err) {
          console.log(err);
      } else {
          obj = JSON.parse(data);
          console.log('obj ',obj[0].user);
          obj[0].user.push(req.body);

          let json = JSON.stringify(obj);
          fs.writeFile('./db/db.json', json,function(err) {
            if (err) throw err;
              console.log('complete');
              res.send("user added successfully");
            }
          );
      }
  });
}
module.exports = {
  getUser,
  addUser
}