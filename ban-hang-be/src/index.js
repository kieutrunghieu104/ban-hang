import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

// middleware
app.use(express.json())
app.use(express.urlencoded())

app.get("/", (req, res) => {
  return res.send("hello");
})

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
})