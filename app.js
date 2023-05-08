const express = require('express')
const app = express()

const port = 3001;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}`);
});


app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res) => {
    res.send('Hello World!')
  })
