const Item  = require("../models/item");

exports.addAll = async (req, res) => {
  try {
    console.log("Request to add item...");
    const data = filterItemArray(req.body);
    let docs = [];

    console.log(data);

    for (var i=0; i<data.length; i++) {
      const item = new Item(data[i]);
      let doc;
      try {
        doc = await item.save();
      } catch (e) {
        return res.status(500).json(e);
      }
      docs.push(doc);
      if (i == (data.length-1)) {
        console.log("Finished");
        res.status(200).json({datas: docs});
      }
    }
    // item.save().then(
    //   (doc) => res.status(200).json(doc),
    //   (reason) => {
    //     console.log(reason);
    //     res.status(400).json(reason);
    //   });
  } catch (e) {
    return res.status(500).json(e);
  }
}

exports.add = async (req, res) => {
  try {
    console.log("Request to add item...");
    const data = filterItem(req.body);
    const item = new Item(data);
    item.save().then(
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
    console.log("Request to get item by Id...");
    const result = await Item.findById(req.params.id)
    .populate(["order"]).populate(["article"]);
    return res.status(200).json(result);
  } catch (e) {
    return res.status(500).json(e);
  }
}

exports.getByOrder = async (req, res) => {
  try {
    console.log("Request to get item by order...");
    const result = await Item.find({ order: req.params.orderId })
    .sort([['updatedAt', 'desc']])
    .populate(["order"]).populate(["article"]);
    return res.status(200).json({datas: result});
  } catch (e) {
    console.log("Error: " + e);
    return res.status(500).json(e);
  }
}

exports.getByArticle = async (req, res) => {
  try {
    console.log("Request to get item by article...");
    const result = await Item.find({ article: req.params.articleId })
    .sort([['updatedAt', 'desc']])
    .populate(["order"]).populate(["article"]);
    return res.status(200).json({datas: result});
  } catch (e) {
    console.log("Error: " + e);
    return res.status(500).json(e);
  }
}

exports.getAll = async (req, res) => {
  try {
    console.log("Request to get all items...");
    const result = await Item.find()
    .populate(["order"]).populate(["article"]);
    return res.status(200).json({datas: result});
  } catch (e) {
    return res.status(500).json(e);
  }
}

exports.update = async (req, res) => {
  try {
    console.log("Request to update item...");
    const data = filterItems(req.body);
    Item.findOneAndUpdate({ _id: req.params.id }, data).then(
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
    console.log("Request to delete item...");
    Item.deleteOne({ _id: req.params.id }).then(
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

function filterItem(input) {
  var item = {
    "article": input.articleId,
    "order": input.orderId,
    "quantity": input.quantity,
  };
  return item;
}

function filterItemArray(input) {
  var items = [];
  for (var i=0; i<input.length; i++) {
    var item = filterItem(input[i])
    items.push(item);
  }
  return items;
}
