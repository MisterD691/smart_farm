const Payment = require("../models/payment");

exports.add = async (req, res) => {
  try {
    console.log("Request to add payment...");
    const data = filterPayment(req.body);
    const payment = new Payment(data);
    payment.save(data).then(
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
    console.log("Request to get payment by Id...");
    const result = await Payment.findById(req.params.id).populate("order");
    return res.status(200).json({datas: result});
  } catch (e) {
    return res.status(500).json(e);
  }
}

exports.getByOrder = async (req, res) => {
  try {
    console.log("Request to get payment by order...");
    const result = await Payment.find({user: req.params.orderId})
    .populate("order");
    return res.status(200).json({datas: result});
  } catch (e) {
    console.log("Error: " + e);
    return res.status(500).json(e);
  }
}

exports.getAll = async (req, res) => {
  try {
    console.log("Request to get all payments...");
    const result = await Payment.find().populate("order");
    return res.status(200).json({datas: result});
  } catch (e) {
    console.log("Error: " + e);
    return res.status(500).json(e);
  }
}

exports.update = async (req, res) => {
  try {
    console.log("Request to update payment...");
    const data = filterPayment(req.body);
    Payment.findOneAndUpdate({ _id: req.params.id }, data).then(
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
    console.log("Request to delete payment...");
    Payment.deleteOne({ _id: req.params.id }).then(
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

function filterPayment(input) {
  var payment = {
    "code": input.code,
    "paymentMode": input.paymentMode,
    "order": input.orderId
  };
  return payment;
}
