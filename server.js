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

// user
const articlesPublishedController = require('./controllers/articlesPublishedController.js');
const articlesModeratedController = require('./controllers/articlesModeratedController.js');
const articlesRejectedController = require('./controllers/articlesRejectedController.js');

// admin controllers
const getAuthorsController = require('./controllers/getAuthorsController.js');
const getModeratorsController = require('./controllers/getModeratorsController.js');
const getPublishedArticlesController = require('./controllers/getPublishedArticlesController.js');
const getModeratedArticlesController = require('./controllers/getModeratedArticlesController.js');
const getRejectedArticlesController = require('./controllers/getRejectedArticlesController.js');
const setStatusPublishedController = require('./controllers/setStatusPublishedController.js');
const setStatusModeratedController = require('./controllers/setStatusPublishedController.js');
const setStatusRejectedController = require('./controllers/setStatusPublishedController.js');


const blockUserController = require('./controllers/blockUserController.js');
const unblockUserController = require('./controllers/unblockUserController.js');

const setModeratorController = require('./controllers/setModeratorController.js');
const setAuthorController = require('./controllers/setAuthorController.js');

const isUserBlockedController = require('./controllers/isUserBlockedController.js');


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

// user
app.get('/my-news-published', articlesPublishedController.getArticlesPublished);
app.get('/my-news-moderated', articlesModeratedController.getArticlesModerated);
app.get('/my-news-rejected', articlesRejectedController.getArticlesRejected);

// admin
app.get('/admin-get-authors', getAuthorsController.getAuthors);
app.get('/admin-get-moderators', getModeratorsController.getModerators);
app.get('/admin-get-published', getPublishedArticlesController.getPublishedArticles);
app.get('/admin-get-moderated', getModeratedArticlesController.getModeratedArticles);
app.get('/admin-get-rejected', getRejectedArticlesController.getRejectedArticles);

app.put('/admin-block-user', blockUserController.blockUser);
app.put('/admin-unblock-user', unblockUserController.unblockUser);
app.put('/admin-set-moderator', setModeratorController.setModerator);
app.put('/admin-set-author', setAuthorController.setAuthor);
app.put('/admin-set-status-published', setStatusPublishedController.setStatus);
app.put('/admin-set-status-moderated', setStatusModeratedController.setStatus);
app.put('/admin-set-status-rejected', setStatusRejectedController.setStatus);

app.get('/is-user-blocked', isUserBlockedController.isUserBlocked);


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});