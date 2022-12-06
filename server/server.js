const express = require('express');
const db = require('./config/connection');
const routes = require('./routes/api');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', routes);

app.use((req, res, next) => {
  res.send('Welcome to Express');
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  })
})