import * as express from "express";
import {
  createOneTask,
  getOneTask,
  getAllTasks,
  getUncompletedTasks,
  getCompletedTasks,
  completeOneTask,
  completeAllTasks,
  updateOneTask,
  deleteOneTask,
  deleteAllUncompletedTasks,
} from "../controllers/task.js";
const router = express.Router();

router.post("/create-one-task", createOneTask);
router.post("/get-one-task", getOneTask);
router.post("/get-all-tasks", getAllTasks);
router.post("/get-uncompleted-tasks", getUncompletedTasks);
router.post("/get-completed-tasks", getCompletedTasks);
router.post("/complete-one-task", completeOneTask);
router.post("/complete-all-tasks", completeAllTasks);
router.post("/update-one-task", updateOneTask);
router.post("/delete-one-task", deleteOneTask);
router.post("/delete-all-uncompleted-tasks", deleteAllUncompletedTasks);

export default router;
