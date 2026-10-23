import AppError from "../utils/AppError.js";
const notFound = (req, res, next) => {
  next(new AppError(`Không tìm thấy endpoint: ${req.method} ${req.originalUrl}`, 404));
};

export default notFound;