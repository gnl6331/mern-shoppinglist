const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//
const items = require('./routes/api/items');

const app = express();

// Bodyparser middelware
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

// Connect to Mongo DB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('Succesful connection with mongoDB'))
  .catch(err => console.log(err));

// Use routes
app.use('/api/items', items);

// Setting our port for the server
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});


