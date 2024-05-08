const express = require('express');
const cors = require('cors');
const signUpController = require('./controllers/signUpController');
const signInController = require('./controllers/signInController');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// auth routes
app.post('/signup', signUpController.signup);
app.post('/signin', signInController.signin);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
