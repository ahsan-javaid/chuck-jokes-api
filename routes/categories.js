const categories = require('../controllers/categories');

module.exports = (app) => {
  app.get('/api/categories', categories.getCategories);
  app.post('/api/categories', categories.insert);
}
