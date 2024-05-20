
const express = require('express');
const cors = require('cors');
require('dotenv').config();
// const accountController = require('./controllers/accountController');
const articlesController = require('./controllers/articlesController');
const signUpController = require('./controllers/signUpController');
const signInController = require('./controllers/signInController');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
}));
app.use(express.json());

// app.get('/account', accountController.account)
app.get('/articles', articlesController.getArticles);
app.post('/signup', signUpController.signup);
app.post('/signin', signInController.signin);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});