'use strict'

var mongoose = require("mongoose");

var = Schema. mongoose.Schema;

var AnswerSchema = new Schema({ //Creates AnswerSchema (child). Declare first the parent's child. 
	text: String,
	createdAt: {type: Date, default: Date.now},
	updatedAt: {type: Date, default: Date.now},
	votes: {type: Number, default: 0}
});

var QuestionSchema = new Schema({ // Creates Question Schema (parent)
	text: String,
	createdAt: {type: Date, default: Date.now},
	answers: [AnswerSchema] // Sets the association between questions and its answers. 
}); 

var Question = mongoose.model("Question", QuestionSchema);

module.exports.Question = Question; // This could be imported into the routes file to make use of it there.