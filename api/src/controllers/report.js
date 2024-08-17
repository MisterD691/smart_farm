const Report = require("../models/report");

exports.add = async (req, res) => {
  try {
    console.log("Request to add report...");
    const data = filterReport(req.body);
    const report = new Report(data);
    report.save(data).then(
      (doc) => res.status(200).json({datas: doc}),
      (reason) => {
        console.log(reason);
        res.status(400).json(reason);
      });
  } catch (e) {
    return res.status(500).json(e.message);
  }
}

exports.getById = async (req, res) => {
  try {
    console.log("Request to get report by Id...");
    const result = await Report.findById(req.params.id).populate("user");
    return res.status(200).json({datas: result});
  } catch (e) {
    return res.status(500).json(e);
  }
}

exports.getByUser = async (req, res) => {
  try {
    console.log("Request to get report by user...");
    const result = await Report.find({user: req.params.userId})
    .populate("user");
    return res.status(200).json({datas: result});
  } catch (e) {
    console.log("Error: " + e);
    return res.status(500).json(e);
  }
}

exports.getAll = async (req, res) => {
  try {
    console.log("Request to get all reports...");
    const result = await Report.find().populate("user");
    return res.status(200).json({datas: result});
  } catch (e) {
    console.log("Error: " + e);
    return res.status(500).json(e);
  }
}

exports.update = async (req, res) => {
  try {
    console.log("Request to update report...");
    const data = filterReport(req.body);
    Report.findOneAndUpdate({ _id: req.params.id }, data).then(
      (doc) => res.status(200).json({datas: doc}),
      (reason) => {
        console.log(reason);
        res.status(400).json(reason);
      }
    );
  } catch (e) {
    console.log("Error: " + e);
    return res.status(500).json(e);
  }
}

exports.remove = async (req, res) => {
  try {
    console.log("Request to delete report...");
    Report.deleteOne({ _id: req.params.id }).then(
      (doc) => res.status(200).json({datas: doc}),
      (reason) => {
        console.log(reason);
        res.status(400).json(reason);
      }
    )
  } catch (e) {
    console.log("Error: " + e);
    return res.status(500).json(e);
  }
}

function filterReport(input) {
  var report = {
    "content": input.content,
    "user": input.userId
  };
  return report;
}
