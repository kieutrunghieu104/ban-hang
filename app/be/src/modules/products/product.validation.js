import { trim, z } from "zod";

const objectIdSchema = z
  .string("ID phải là chuỗi ký tự")
  .regex(/^[0-9a-fA-F]{24}$/, "ID sản phẩm không hợp lệ");
const productFieldsSchema = {
  name: z
    .string("Name sản phẩm phải là chuỗi ký tự")
    .trim()
    .min(2, "Name phải lớn hơn hoặc bằng 2")
    .max(150, "Name không được vượt quá 150"),
  image: z
    .string("Image sản phẩm phải là chuỗi ký tự")
    .trim(),
  type: z
    .string("Type sản phẩm phải là chuỗi ký tự")
    .trim()
    .min(2, "Name phải lớn hơn hoặc bằng 2")
    .max(150, "Name không được vượt quá 150"),
  price: z
    .number({ error: "Price phải là số" })
    .int("Price phải là số nguyên")
    .min(0, "Name phải lớn hơn hoặc bằng 0"),
  countInStock: z
    .number({ error: "countInStock phải là số" })
    .int("countInStock phải là số nguyên")
    .min(0, "countInStock phải lớn hơn hoặc bằng 0"),
  rating: z
    .number({ error: "Rating phải là số" })
    .min(0, "Rating phải lớn hơn hoặc bằng 0")
    .max(5, "Rating không được vượt quá 5"),
  description: z
    .string("Description sản phẩm phải là chuỗi ký tự")
    .trim()
    .max(2000, "Description không được vượt quá 2000"),
}

const getAllProductsSchema = z.object({
  query: z.object({
    page: z
      .coerce.number({ error: "Page phải là số" })
      .int("Page phải là số nguyên")
      .min(1, "Page phải lớn hơn hoặc bằng 1")
      .default(1),
    limit: z
      .coerce.number({ error: "Page phải là số" })
      .int("Limit phải là số nguyên")
      .min(1, "Limit phải lớn hơn hoặc bằng 1")
      .max(100, "Limit không được vượt quá 100")
      .default(10),
    keyword: z
      .string("Keyword phải là chuỗi ký tự")
      .trim()
      .max(100, "Limit không được vượt quá 100")
      .optional(),
    type: z
      .string("Type phải là chuỗi ký tự")
      .trim()
      .max(100, "Limit không được vượt quá 100")
      .optional(),
    sortBy: z
      .enum(["createdAt", "name", "price"], { error: "sortBy chỉ chấp nhận createdAt, name hoặc price" })
      .default("createdAt"),
    sortOrder: z
      .enum(["asc", "desc"], { error: "sortOrder chỉ chấp nhận asc, desc" })
      .default("desc"),
  }).strict(),
});

const getProductIdSchema = z.object({
  params: z.object({
    id: objectIdSchema,
  })
});

const createProductSchema = z.object({
  body: z.object({
    name: productFieldsSchema.name,
    type: productFieldsSchema.type,
    price: productFieldsSchema.price,
    image: productFieldsSchema.image.optional(),
    countInStock: productFieldsSchema.countInStock.optional(),
    rating: productFieldsSchema.rating.optional(),
    description: productFieldsSchema.description.optional(),
  }).strict()
});

const updateProductSchema = z.object({
  params: z.object({
    id: objectIdSchema,
  }),
  body: z.object({
    name: productFieldsSchema.name.optional(),
    type: productFieldsSchema.type.optional(),
    price: productFieldsSchema.price.optional(),
    image: productFieldsSchema.image.optional(),
    countInStock: productFieldsSchema.countInStock.optional(),
    rating: productFieldsSchema.rating.optional(),
    description: productFieldsSchema.description.optional(),
  }).strict().refine(body => Object.keys(body).length > 0, {
    message: "Cần ít nhất một trường để cập nhật",
  })
});

export {
  getAllProductsSchema,
  getProductIdSchema,
  createProductSchema,
  updateProductSchema,
}