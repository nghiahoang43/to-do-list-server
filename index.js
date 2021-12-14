import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import taskRoutes from "./routes/task.js";
import cors from "cors";

config();

const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL;
const app = express();

const corsOpts = {
  origin: "*",
  credentials: true,
  methods: ["GET", "POST", "HEAD", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type"],
  exposedHeaders: ["Content-Type"],
};

app.use(cors(corsOpts));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(taskRoutes);

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    app.listen(PORT);
  })
  .catch((err) => console.log(err));
