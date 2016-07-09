'use strict';

var express = require("express");
var app = express();
var routes = require("./routes");

var jsonParser = require("body-parser").json
var logger = require("morgan");


app.use(logger("dev"));
app.use(jsonParser());

app.use("/questions", routes);

app.use(function(req, res, next){
	req.body;
	next();
})

var port = process.env.PORT || 4000;

app.listen(port, function() {
	console.log("Express server is listening on port", port)
});