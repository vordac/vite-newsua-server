
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const articlesController = require('./controllers/articlesController');
const signUpController = require('./controllers/signUpController');
const signInController = require('./controllers/signInController');
const logoutController = require('./controllers/logoutController');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
}));
app.use(express.json());

app.get('/articles', articlesController.getArticles);
app.post('/signup', signUpController.signup);
app.post('/signin', signInController.signin);
app.get('/logout', logoutController.logout);


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});