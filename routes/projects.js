const express = require("express");
const { getProjects, getProject, createProject } = require("../controllers/projects");

const router = express.Router();


router.get("/", getProjects);
router.get("/:id", getProject);
router.post("/", createProject);

module.exports = router;