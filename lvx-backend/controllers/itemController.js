const Item = require("./../models/itemModel");
const APIFeatures = require("../utils/apiFeatures");

exports.getAllItems = async (req, res) => {
  try {
    //EXECUTE QUERY
    const features = new APIFeatures(Item.find(), req.query)
      .filter()
      .sort()
      .search()
      // .paginate();
    const items = await features.query;

    //SEND RESPONSE
    res.status(200).json({
      status: "success",
      results: items.length,
      data: {
        items,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getItem = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        item,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createItem = async (req, res) => {
  try {
    const newItem = await Item.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        item: newItem,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "Invalid data sent!",
    });
  }
};

// exports.updateItem = async (req, res) => {
//   try {
//     const updatedItems = await Item.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true,
//     });

//     res.status(200).json({
//       status: "success",
//       data: {
//         updatedItems,
//       },
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(404).json({
//       status: "fail",
//       message: err,
//     });
//   }
// };

exports.deleteItem = async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
