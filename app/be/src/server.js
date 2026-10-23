import express from "express";
import env from "./config/env.js";
import connectDB from "./config/db.js";
import app from "./app.js";
const startServer = async () => {
  try {
    await connectDB();
    app.listen(env.PORT, () => {
      console.log(`http://localhost:${env.PORT}`);
    });
  } catch (error) {
    console.log("Failed to start server because:", error);
    process.exit(1);
  }
};
startServer();
