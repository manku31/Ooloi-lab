import httpStatus from "http-status";

class ApiError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const handleError = (err, res) => {
  const { statusCode, message } = err;

  res.status(statusCode).send({
    status: "error",
    statusCode,
    message,
  });
};

export const convertToApiError = (err, req, res, next) => {
  if (!(err instanceof ApiError)) {
    const statusCode = err.statusCode || httpStatus.INTERNAL_SERVER_ERROR;
    const message = err.message || httpStatus[statusCode];
    err = new ApiError(statusCode, message);
  }
  next(err);
};
