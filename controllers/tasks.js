const Task = require("../models/Task");
const mongoose = require("mongoose");

const getTasks = async(req, res) => {
    const { projectId } = req.params;
    try {
        const tasks = await Task.find({ projectId: projectId });
        res.status(200).json({ data: tasks, message: "Tasks fetched successfully" });
    } catch (err) {
        console.log(err);
        res.status(404).json({ data: [], message: err.message });
    }
}

const createTask = async(req, res) => {
    const task = req.body;
    const newTask = new Task(task);
    try {
        const result = await newTask.save();
        res.status(201).json({ data: result, message: "Task saved successfully" });
    } catch (err) {
        console.log(err);
        res.status(409).json({ data: [], message: err.message });
    }
}

const updateTask = async(req, res) => {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        res.status(404).json({ data: [], message: "No task with this id" });
    }
    try {
        const task = {...req.body, _id };
        const result = await Task.findByIdAndUpdate(_id, task);
        res.status(200).json({ data: result, message: "Task updated successfully" });
    } catch (err) {
        console.log(err);
        res.status(404).json({ data: [], message: err.message });
    }
}

module.exports = { getTasks, createTask, updateTask };