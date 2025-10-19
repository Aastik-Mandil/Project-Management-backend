const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    title: { type: String },
    description: { type: String },
    projectId: { type: String },
    status: { type: String },
}, {
    timestamp: true,
});


module.exports = mongoose.model("Task", TaskSchema);