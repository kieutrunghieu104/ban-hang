import mongoose from "mongoose";
import AppError from "../utils/AppError.js"

const errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  };
  let error = err;
  console.log(error);
  // Mongoose schema
  if (error instanceof mongoose.Error.StrictModeError) {
    error = new AppError(`Field "${error.path}" không được khai báo trong Schema`, 400);
  } else if (error instanceof mongoose.Error.ValidationError) {
    error = new AppError("Dữ liệu không đáp ứng yêu cầu của database", 400);
  } else if (error instanceof mongoose.Error.CastError) {
    error = new AppError("ID hoặc giá trị dữ liệu không hợp lệ", 400);
  } else if (err?.code === 11000) {
    error = new AppError('Dữ liệu đã tồn tại', 409);
  } else if (!(error instanceof AppError)) {
    error = new AppError('Lỗi chưa xác định console để xem', 500);
  }
  let message = error.message;
  let statusCode = error.statusCode ?? 500;
  let details = error.details ?? [];
  const response = {
    success: false,
    message: message,
  };
  if (details.length > 0) response.details = details;
  return res.status(statusCode).json(response);
};
export default errorHandler;