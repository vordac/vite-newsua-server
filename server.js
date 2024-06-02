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
const getUserRoleController = require('./controllers/getUserRoleController.js');
const getUserNicknameController = require('./controllers/getUserNicknameController.js');
const articlesPublishedController = require('./controllers/articlesPublishedController.js');

// admin controllers
const getAuthorsController = require('./controllers/getAuthorsController.js');
const getModeratorsController = require('./controllers/getModeratorsController.js');

const blockUserController = require('./controllers/blockUserController.js');
const unblockUserController = require('./controllers/unblockUserController.js');

const setModeratorController = require('./controllers/setModeratorController.js');
const setAuthorController = require('./controllers/setAuthorController.js');


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());
// GET News
app.get('/articles-grid', gridArticlesController.getArticlesGrid);
app.get('/articles-list', listArticlesController.getArticlesList);
app.get('/category', categoryArticlesController.getArticlesCategory);
app.get('/author', authorArticlesController.getArticlesAuthor);
app.get('/all', articlesController.getArticles);

app.get('/read', readController.read);
app.post('/signup', signUpController.signup);
app.put('/views', viewsIncrementController.viewsIncrement);
app.get('/get-user-role', getUserRoleController.getUserRole);
app.get('/get-user-nickname', getUserNicknameController.getUserNickname);
app.get('/my-news-published', articlesPublishedController.getArticlesPublished);

// admin
app.get('/admin-get-authors', getAuthorsController.getAuthors);
app.get('/admin-get-moderators', getModeratorsController.getModerators);
// app.get('/admin-get-published');
// app.get('/admin-get-moderated');
// app.get('/admin-get-rejected');
app.put('/admin-block-user', blockUserController.blockUser);
app.put('/admin-unblock-user', unblockUserController.unblockUser);
app.put('/admin-set-moderator', setModeratorController.setModerator);
app.put('/admin-set-author', setAuthorController.setAuthor);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});