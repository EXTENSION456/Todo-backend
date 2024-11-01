const express = require("express");
const app = express();
const cors = require("cors");
const connectDb = require("./config/db");
const todoRoutes = require("./routes/todoRoutes");

const PORT = 3000;

//for connection to the database
connectDb();

// Global middleware (applies to all routes)
app.use(express.json());
app.use(cors());

// Middleware for a specific route
app.use("/api", todoRoutes);

//start server
app.listen(PORT, () => {
  console.log(`server is running on the ${PORT}`);
});
