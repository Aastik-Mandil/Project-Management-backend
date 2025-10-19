const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

// middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// routers
const projectRoutes = require("./routes/projects");
const taskRoutes = require("./routes/tasks");

// use of routers
app.use("/projects", projectRoutes);
app.use("/tasks", taskRoutes);

// database connection
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("MongoDB connected successfully"))
    .catch((error) => console.error("MongoDB connection error:", error));

// server running
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});