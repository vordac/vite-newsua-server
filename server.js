const express = require('express');
const cors = require('cors');
const signUpController = require('./controllers/signUpController');
const signInController = require('./controllers/signInController');
const articlesController = require('./controllers/articlesController');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// auth routes
app.get('/articles', articlesController.getArticles);
app.post('/signup', signUpController.signup);
app.post('/signin', signInController.signin);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// <Route path="/" element={<LayoutIndex />}></Route>
// <Route path="/read" element={<LayoutRead />} />
