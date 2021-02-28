

exports.getCategories = async (req, res) => {
  const categories = await global.models.Categories.find({});
  res.json({categories: categories});
}

exports.insert = async (req, res) => {
  const categories = await global.models.Categories.insertMany(req.body.map((e) => ({name: e})));
  res.json({categories: categories});
}
