import express, { json } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import env from "./config/env.js";

const app = express();
// global middlewares
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

export default app;