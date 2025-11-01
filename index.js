// Set up express
const express = require ("express");
const app = express();
const port = 3000;

// Set the rendering engine for Express to EJS
app.set("view engine", "ejs");

// Load the route handlers
const mainRoutes = require("./routes/main.js");
app.use('/', mainRoutes);

// Start listening for HTTP requests
app.listen(port, () => console.log(`Node server is running on port ${port}...`));