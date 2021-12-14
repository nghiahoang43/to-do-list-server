import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  content: String,
  isCompleted: Boolean,
});

export const Task = mongoose.model("task", taskSchema);
