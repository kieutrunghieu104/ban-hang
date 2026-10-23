import { Router } from "express";

import validateRequest from "../../middlewares/validateRequest.js";
import { getAllProductsSchema } from "./product.validation.js";
import { getProductIdSchema } from "./product.validation.js";
import { createProductSchema } from "./product.validation.js";
import { updateProductSchema } from "./product.validation.js";
import { deleteProductSchema } from "./product.validation.js";
import { getAllProductsController } from "../products/product.controller.js";
import { getProductByIdController } from "../products/product.controller.js";
import { createProductController } from "../products/product.controller.js";
import { updateProductController } from "../products/product.controller.js";
import { deleteProductController } from "../products/product.controller.js";
const router = Router();

router
  .route("/")
  .get(validateRequest(getAllProductsSchema), getAllProductsController)
  .post(validateRequest(createProductSchema), createProductController);
router
  .route("/:id")
  .get(validateRequest(getProductIdSchema), getProductByIdController)
  .patch(validateRequest(updateProductSchema), updateProductController)
  .delete(validateRequest(deleteProductSchema), deleteProductController);

export default router; 