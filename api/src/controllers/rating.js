const Rating  = require("../models/rating");

exports.add = async (req, res) => {
  try {
    console.log("Request to add rating...");
    const data = filterRating(req.body);
    const rating = new Rating(data);
    rating.save().then(
      (doc) => res.status(200).json({datas: doc}),
      (reason) => {
        console.log(reason);
        res.status(400).json(reason);
      });
  } catch (e) {
    console.log("Error: " + e);
    return res.status(500).json(e);
  }
}

exports.getById = async (req, res) => {
  try {
    console.log("Request to get rating by Id...");
    const result = await Rating.findById(req.params.id)
    .populate(["user"]).populate(["article"]);
    return res.status(200).json(result);
  } catch (e) {
    return res.status(500).json(e);
  }
}

exports.getByUser = async (req, res) => {
  try {
    console.log("Request to get rating by user...");
    const result = await Rating.find({ user: req.params.userId })
    .sort([['updatedAt', 'desc']])
    .populate(["user"]).populate(["article"]);
    return res.status(200).json({datas: result});
  } catch (e) {
    console.log("Error: " + e);
    return res.status(500).json(e);
  }
}

exports.getByArticle = async (req, res) => {
  try {
    console.log("Request to get rating by article...");
    const result = await Rating.find({ article: req.params.articleId })
    .sort([['updatedAt', 'desc']])
    .populate(["user"]).populate(["article"]);
    return res.status(200).json({datas: result});
  } catch (e) {
    console.log("Error: " + e);
    return res.status(500).json(e);
  }
}

exports.getAll = async (req, res) => {
  try {
    console.log("Request to get all ratings...");
    const result = await Rating.find()
    .populate(["user"]).populate(["article"]);
    return res.status(200).json({datas: result});
  } catch (e) {
    return res.status(500).json(e);
  }
}

exports.update = async (req, res) => {
  try {
    console.log("Request to update rating...");
    const data = filterRatings(req.body);
    Rating.findOneAndUpdate({ _id: req.params.id }, data).then(
      (doc) => res.status(200).json(doc),
      (reason) => {
        console.log(reason);
        res.status(400).json(reason);
      }
    );
  } catch (e) {
    return res.status(500).json(e);
  }
}

exports.remove = async (req, res) => {
  try {
    console.log("Request to delete rating...");
    Rating.deleteOne({ _id: req.params.id }).then(
      (doc) => res.status(200).json(doc),
      (reason) => {
        console.log(reason);
        res.status(400).json(reason);
      }
    )
  } catch (e) {
    return res.status(500).json(e);
  }
}

function filterRating(input) {
  var rating = {
    "article": input.articleId,
    "user": input.userId,
    "stars": input.stars,
    "comment": input.comment,
  };
  return rating;
}
