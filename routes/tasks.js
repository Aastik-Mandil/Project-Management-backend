const express = require("express");
const { getTasks, updateTask, createTask } = require("../controllers/tasks");

const router = express.Router();


router.get("/:projectId", getTasks);
router.post("/", createTask);
router.patch("/:id", updateTask);

module.exports = router;