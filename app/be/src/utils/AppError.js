class AppError extends Error {
  constructor(message = "Đã xảy ra lỗi hệ thống", statusCode = 500, details = []) {
    super(message);
    this.name = "AppError";
    this.statusCode = statusCode;
    this.details = details;
    this.isOperational = true;
  }
}
export default AppError;