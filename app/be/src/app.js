import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";

import env from "./config/env.js";
import notFound from "./middlewares/notFound.js";
import errorHandler from "./middlewares/errorHandler.js";
import productRoutes from "./modules/products/product.routes.js";

const app = express();

// global middlewares
app.use(helmet());
app.use(
  cors({
    origin: env.CLIENT_ORIGIN,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// Api
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API is running",
  })
});
app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;