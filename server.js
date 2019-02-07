const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes');
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

// Define Middleware Here -------------------------------------
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Serve Up Static Assets (usually on Heroku) -----------------
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

// Define API Routes Here -------------------------------------
app.use(routes);

/*const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/trektipsemail';
mongoose.connect(MONGODB_URI, {useNewUrlParser: true});*/

app.listen(PORT, () => {
  console.log(`API Server now on port: ${PORT}`)
});