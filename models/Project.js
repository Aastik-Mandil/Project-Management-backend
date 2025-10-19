const mongoose = require('mongoose');

const ProjectSchema = mongoose.Schema({
    name: { type: String },
    description: { type: String },
}, {
    timestamp: true,
});


module.exports = mongoose.model("Project", ProjectSchema);