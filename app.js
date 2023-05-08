const path = require('path')
const express = require('express')
const app = express()

const port = 3001;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

// using templates
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));  
app.use(express.static(path.join(__dirname, 'public')));



app.get('/', (req, res) => {
    res.render('base')
  })
