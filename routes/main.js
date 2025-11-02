// Create a new router
const express = require("express");
const router = express.Router();

// Handle the main routes
router.get("/", (req, res) => {
    res.render("index.ejs", {title: "Hello"})
});
router.get("/about", (req, res) => {
    res.render("about.ejs", {title: "About"})
});
router.get("/search", (req, res) => {
    res.render("search.ejs", {title: "Search"})
});
router.get("/search_result", function (req, res) {
    // res.send("You searched for " + req.query.search_text);
    res.render("results.ejs", {title: "Results", search_results: req.query.search_text})
});
// Export the router object so index.js can access it
module.exports = router;