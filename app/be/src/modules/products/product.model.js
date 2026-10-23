import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Tên sản phẩm là bắt buộc"],
    trim: true,
    maxLength: [200, "Tên sản phẩm không được vượt quá 200 ký tự"],
    unique: true,
  },
  image: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    required: [true, "Loại sản phẩm là bắt buộc"],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "Giá sản phẩm là bắt buộc"],
    min: [0, "Giá sản phẩm không được âm"],
    validate: {
      validator: Number.isInteger,
      message: "Giá phải là số nguyên",
    }
  },
  countInStock: {
    type: Number,
    default: 0,
    min: [0, "Số lượng tồn kho không được âm"],
    validate: {
      validator: Number.isInteger,
      message: 'Số lượng tồn kho phải là số nguyên'
    }
  },
  rating: {
    type: Number,
    default: 0,
    min: [0, "Đánh giá không được nhỏ hơn 0"],
    max: [5, "Đánh giá không được lớn hơn 5"],
  },
  description: {
    type: String,
    default: "",
    trim: true,
  },
}, {
  timestamps: true,
  versionKey: false,
  strict: "throw",
});
// productSchema.index({ name: 1 });
productSchema.index({ price: -1 });
const Product = mongoose.model("Product", productSchema);
export default Product;

