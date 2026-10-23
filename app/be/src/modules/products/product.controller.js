import { getAllProductsService } from "./product.service.js";
import { getProductByIdService } from "./product.service.js";
import { createProductService } from "./product.service.js";
import { updateProductService } from "./product.service.js";
import { deleteProductService } from "./product.service.js";

const getAllProductsController = async (req, res) => {
  const result = await getAllProductsService(req.validated.query);
  return res.status(200).json({
    success: true,
    message: "Lấy danh sách sản phẩm thành công",
    data: result.items,
    pagination: result.pagination,
  });
};

const getProductByIdController = async (req, res) => {
  const result = await getProductByIdService(req.validated.params.id);
  return res.status(200).json({
    success: true,
    message: "Lấy sản phẩm thành công",
    data: result,
  })
};

const createProductController = async (req, res) => {
  const result = await createProductService(req.validated.body);
  return res.status(200).json({
    success: true,
    message: "Tạo sản phẩm thành công",
    data: result,
  });
}

const updateProductController = async (req, res) => {
  const result = await updateProductService(req.validated.params.id, req.validated.body);
  return res.status(200).json({
    success: true,
    message: "Cập nhật sản phẩm thành công",
    data: result,
  });
};

const deleteProductController = async (req, res) => {
  const result = await deleteProductService(req.params.validated.id);
  return res.status(200).json({
    success: true,
    message: "xóa sản phẩm thành công",
    data: {
      name: result.name,
      image: result.image,
      type: result.type,
      price: result.price,
      countInStock: result.countInStock,
      rating: result.rating,
      description: result.description,
    },
  });
}

export {
  getAllProductsController,
  getProductByIdController,
  createProductController,
  updateProductController,
  deleteProductController,
};