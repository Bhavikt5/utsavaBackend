const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Newsletter = require("../models/newsletterModal");

exports.newsletter = catchAsyncErrors(async (req, res, next) => {
  const { name, email } = req.body;

  const subscriber = await Newsletter.create({
    name,
    email,
  });

  res.status(201).json({
    success: true,
    subscriber,
  });
});
