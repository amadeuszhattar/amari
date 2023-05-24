const path = require('path');
const express = require('express');
const fs = require('fs');

const app = express();
const port = 3001;

const server = app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.get('/mariusz', (req, res) => {
  res.render('base');
});

app.get('/amadeusz', (req, res) => {
  const jsonFilePath = path.join(__dirname, 'data', 'db.json');

  fs.readFile(jsonFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.sendStatus(500);
    }

    const icons = JSON.parse(data).icons;
    res.render('navbar', { icons });
  });
});
