import Product from "./product.model.js";
import AppError from "../../utils/AppError.js";

const escapeRegex = value => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const getProductOrThrow = async (id, { lean, select } = {}) => {
  let query = Product.findById(id);
  if (lean) query.lean();
  if (select) query.select(select);
  const result = await query.exec();
  if (!result) throw new AppError("Không tìm thấy sản phẩm", 404);
  return result;
}

const getAllProductsService = async ({ page, limit, keyword, type, sortBy, sortOrder }) => {
  const skip = (page - 1) * limit;
  const sort = { [sortBy]: sortOrder === "asc" ? 1 : -1, _id: -1 };
  const filter = {};
  if (keyword) {
    filter.name = {
      $regex: escapeRegex(keyword),
      $options: "i",
    };
  }
  if (type) {
    filter.type = type;
  }
  const [products, total] = await Promise.all([
    Product.find(filter).select("-_id").sort(sort).skip(skip).limit(limit).lean().exec(),
    Product.countDocuments(filter).exec(),
  ]);
  return {
    items: products,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  };
};

const getProductByIdService = async (id) => getProductOrThrow(id, { lean: true });
const createProductService = async (data) => Product.create(data);
const updateProductService = async (id, data) => {
  const result = await getProductOrThrow(id, { select: "-_id" });
  const changesData = Object.entries(data).filter(([key, value]) => !Object.is(result[key], value));
  if (!changesData.length) return result;
  result.set(Object.fromEntries(changesData));
  return result.save();
}

export {
  getAllProductsService,
  getProductByIdService,
  createProductService,
  updateProductService,
};