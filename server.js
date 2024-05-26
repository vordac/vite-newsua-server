const express = require('express');
const cors = require('cors');
require('dotenv').config();
// const articlesController = require('./controllers/articlesController');
const gridArticlesController = require('./controllers/gridArticlesController.js');
const listArticlesController = require('./controllers/listArticlesController.js');
const categoryArticlesController = require('./controllers/categoryArticlesController.js');
const authorArticlesController = require('./controllers/authorArticlesController.js');
const viewsIncrementController = require('./controllers/viewsIncrementController.js');
const articlesController = require('./controllers/articlesController.js');
const readController = require('./controllers/readController.js');
const signUpController = require('./controllers/signUpController');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/articles-grid', gridArticlesController.getArticlesGrid);
app.get('/articles-list', listArticlesController.getArticlesList);
app.get('/category', categoryArticlesController.getArticlesCategory);
app.get('/author', authorArticlesController.getArticlesAuthor);
app.get('/read', readController.read);
app.post('/signup', signUpController.signup);
app.put('/views', viewsIncrementController.viewsIncrement);
app.get('/all', articlesController.getArticles);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});