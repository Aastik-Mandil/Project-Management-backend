const Project = require("../models/Project");

const getProjects = async(req, res) => {
    try {
        const projects = await Project.find({});
        res.status(200).json({ data: projects, message: "Projects fetched successfully" });
    } catch (err) {
        console.log(err);
        res.status(404).json({ data: [], message: err.message });
    }
}

const getProject = async(req, res) => {
    const { id } = req.params;
    try {
        const project = await Project.findById(id);
        res.status(200).json({ data: project, message: "Project detail fetched successfully" });
    } catch (err) {
        console.log(err);
        res.status(404).json({ data: [], message: err.message });
    }
}

const createProject = async(req, res) => {
    const project = req.body;
    const newProject = new Project(project);
    try {
        const result = await newProject.save();
        console.log(result)
        res.status(201).json({ data: result, message: "Project saved successfully" });
    } catch (err) {
        console.log(err);
        res.status(409).json({ data: [], message: err.message });
    }
}

module.exports = { getProjects, getProject, createProject };