const errorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  // log to console for dev
  console.log(err);

  // mongoose bad objectId
  if (err.name === 'CastError') {
    const message = `Resource not found with id of ${err.value}`;
    error = new errorResponse(message, 404);
  }

  // mongoose duplicated key
  if (err.code === 11000) {
    const message = `Duplicated field value entere`;
    error = new errorResposne(message, 400);
  }

  // mongoose validation error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(value => value.message);
    error = new errorResponse(message, 400);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error'
  })
}

module.exports = errorHandler;
