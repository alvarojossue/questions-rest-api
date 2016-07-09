'use strict';

var express = require("express");
var router = express.Router();

// GET /questions
// Route for questions collection
router.get("/", function(req, res) {
	res.json({response: "You sent a GET request"});
});

// POST /questions
// Route for creating questions
router.post("/", function(req, res) {
	res.json({
		response: "You sent a POST request",
		body: req.body
	});
});

// GET /questions/:qID
// Route for specific questions
router.get("/:qID", function(req, res) {
	res.json({
		response: "You sent a GET request for ID " + req.params.qID
	});
});

// POST /questions/:id/answers
// Route for creating an answer
router.post("/:qID/answers", function(req, res) {
	res.json({
		response: "You sent a POST request to /answers",
		questionID: req.params.qID,
		body: req.body
	});
});

// PUT /questions/:qID/answers/:aID
// Route for specific answer
router.put("/:qID/answers/:aID", function(req, res) {
	res.json({
		response: "You sent a PUT request to /answers",
		questionID: req.params.qID,
		answerID: req.params.aID,
		body: req.body
	});
});

// DELETE /questions/:qID/answers/:aID
// Route for deleting a specific answer
router.delete("/:qID/answers/:aID", function(req, res) {
	res.json({
		response: "You sent a DELETE request to /answers",
		questionID: req.params.qID,
		answerID: req.params.aID,
	});
});

// POST /questions/:qID/answers/:aID/vote-up
// POST /questions/:qID/answers/:aID/vote-down

// Vote on a specific answer
router.post("/:qID/answers/:aID/vote-:dir", function(req, res) {
	res.json({
		response: "You sent a POST request to /vote-" + req.params.dir,
		questionID: req.params.qID,
		answerID: req.params.aID,
		vote: req.params.dir
	});
});



module.exports = router;