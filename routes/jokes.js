const jokes = require('../controllers/jokes');

module.exports = (app) => {
  app.get('/api/jokes', jokes.getJokes);
  app.get('/api/jokes/:id', jokes.getJoke);
  app.put('/api/jokes/like/:id', jokes.likeJoke);
  app.put('/api/jokes/dislike/:id', jokes.dislikeJoke);
}
