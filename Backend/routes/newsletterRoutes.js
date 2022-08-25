const express = require("express");
const { newsletter } = require("../controllers/newsletterController");

// Make a Router for route
const router = express.Router(); // This will help to Create Router Routes

router.route("/newsletter").post(newsletter);

module.exports = router;
