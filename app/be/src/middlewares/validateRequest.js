import AppError from "../utils/AppError.js";

const validateRequest = (schema) => (req, res, next) => {
  const result = schema.safeParse({
    body: req.body,
    params: req.params,
    query: req.query,
  });

  if (!result.success) {
    const details = result.error.issues.map(issue => ({
      field: issue.path.join("."),
      message: issue.message,
    }));
    return next(new AppError("Dữ liệu đầu vào không hợp lệ", 400, details));
  }
  req.validated = result.data;
  next();
};

export default validateRequest;
