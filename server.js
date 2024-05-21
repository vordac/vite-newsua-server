
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const articlesController = require('./controllers/articlesController');
const readController = require('./controllers/readController.js');
const signUpController = require('./controllers/signUpController');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
}));
app.use(express.json());

app.get('/articles', articlesController.getArticles);
app.get('/read', readController.read);
app.post('/signup', signUpController.signup);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});