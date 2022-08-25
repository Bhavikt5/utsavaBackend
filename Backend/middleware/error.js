const res = require("express/lib/response");
const ErrorHandler = require("../utils/errorhandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500; // 500 - Internal Server Error
  err.message = err.message || "Internal Server Error";

  // Wrong MongoDB Id error
  if (err.name === "CastError") {
    const message = `Resource not found`;
    err = new ErrorHandler(message, 400); // 400 - Bad request
  }

  // Mongoose duplicate key error
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
    err = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message, /// we can use .stack to get all detail of error --- its optional
  });
};
