const express = require('express');
const cors = require('cors');
require('dotenv').config();
// const articlesController = require('./controllers/articlesController');
const gridArticlesController = require('./controllers/gridArticlesController.js');
const listArticlesController = require('./controllers/listArticlesController.js');
const categoryArticlesController = require('./controllers/categoryArticlesController.js');
const authorArticlesController = require('./controllers/authorArticlesController.js');
const viewsIncrementController = require('./controllers/viewsIncrementController.js');
const readController = require('./controllers/readController.js');
const signUpController = require('./controllers/signUpController');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// app.use(cors({
//   origin: 'https://newsua.netlify.app/',
//   credentials: true,
//   optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
// }));
app.use(express.json());

app.get('/articles-grid', gridArticlesController.getArticlesGrid);
app.get('/articles-list', listArticlesController.getArticlesList);
app.get('/category', categoryArticlesController.getArticlesCategory);
app.get('/author', authorArticlesController.getArticlesAuthor);
app.get('/read', readController.read);
app.post('/signup', signUpController.signup);
app.put('/views', viewsIncrementController.viewsIncrement);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});