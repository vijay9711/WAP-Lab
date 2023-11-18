const express = require('express');
const app = express();
const bookRouter = require('./route/book-router');


app.use(express.json());
app.use(express.urlencoded({extends:true}));

app.use('/book', bookRouter);
app.set('port', process.env.PORT || 3000);
app.use((req, res, next) => {
  res.status(200).sendFile(path.join(__dirname, '.','view','404','404.html'));
});

// app.use((err, req, res, next) => {
//   res.status(500).send('Internal Server Error! err');
// });

app.listen(app.get('port'), () => console.log(`listening on ${app.get('port')}`));
