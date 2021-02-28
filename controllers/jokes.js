
exports.getJokes = async (req, res) => {
  const filter = {};
  if (req.query.search) {
    const reg = new RegExp(unescape(req.query.search), 'i');
    const condition = [{
        $or: [
          {categories: reg},
          {value: reg},
        ]
      }];
    filter.$and = condition;
  }
  const total = await global.models.Jokes.countDocuments(filter);
  const jokes = await global.models.Jokes.find(filter)
    .sort({_id: -1})
    .skip(req.query.offset ? parseInt(req.query.offset) : 0)
    .limit(req.query.limit ? parseInt(req.query.limit) : 0)
  res.json({jokes: jokes, total});
}

exports.getJoke = async (req, res) => {
  const joke = await global.models.Jokes.findOne({_id: req.params.id});
  res.json({joke: joke});
}

exports.insertJokes = async (req, res) => {
  const jokes = await global.models.Jokes.insertMany(req.body.result);
  res.json(jokes);
}

exports.likeJoke = async (req, res) => {
  const jokes = await global.models.Jokes.updateOne({_id: req.params.id}, {$inc: {likes: 1}});
  res.json(jokes);
}

exports.dislikeJoke = async (req, res) => {
  const jokes = await global.models.Jokes.updateOne({_id: req.params.id}, { $inc: {dislikes: 1}});
  res.json(jokes);
}
