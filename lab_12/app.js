const express = require('express');
const app = express();
const path = require('path');
const user = require('./router/user.router');
const product = require('./router/product.router');

app.set('port', process.env.PORT || 3000);
app.use('/', express.static(path.join(__dirname, 'view', '404')));
app.use(express.urlencoded({extended:true}))

// app.use('/',(req,res)=>{
//   next();
// })
app.use('/user', user);
app.use('/product', product);


app.use((req, res, next) => {
  res.status(200).sendFile(path.join(__dirname, '.','view','404','404.html'));
});

app.use((err, req, res, next) => {
  res.status(500).send('Internal Server Error! err');
});

app.listen(app.get('port'), () => console.log(`listening on ${app.get('port')}`));