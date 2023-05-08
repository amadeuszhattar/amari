const path = require('path');
const express = require('express');
const app = express();

const port = 3001;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

app.set('view engine', 'pug');
// app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/mariusz', (req, res) => {
  res.render('base');
});

// app.get('/amadeusz', (req, res) => {
//   res.sendFile(`${__dirname}/views/header.html`);
// });

app.get('/amadeusz', (req, res) => {
  res.render('base2');
});
