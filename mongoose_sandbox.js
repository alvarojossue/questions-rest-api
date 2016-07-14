'use strict';

var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/test");

var db = mongoose.connection;

db.on("error", function(err){
	console.error("connection error:", err);
});

db.once("open", function(){
	console.log("db connection successful");
	// All database communication goes here

	var Schema = mongoose.Schema;
	var AnimalSchema = new Schema({
		type: {type: String, default: "goldfish"}, // Default parameters when passing an empty object
		color: {type: String, default: "small"},
		size: {type: String, default: "golden"},
		mass: {type: Number, default: 0.007},
		name: {type: String, default: "Angela"}
	});

	var Animal = mongoose.model("Animal", AnimalSchema); 

	var elephant = new Animal({ // Creating a new instance (animal)
		type: "elephant",
		color: "gray",
		size: "big",
		mass: 6000,
		name: "Lawrence"
	});

	var animal = new Animal({}); // Creating a generic animal with default properties

	var dog = new Animal({ // Creating a  new instance (animal)
		type: "dog",
		color: "white",
		size: "big",
		mass: 40,
		name: "Camila"

	});

	var animalData = [ // List of animals
		{
			type: "cat",
			color: "black",
			size: "small",
			mass: 20,
			name: "Lucas"
		},
		{
			type: "bird",
			color: "yellow",
			size: "small",
			mass: 2,
			name: "Tweety"
		},
		{
			type: "cow",
			color: "brown",
			size: "big",
			mass: 100,
			name: "Fab"
		}, 
		elephant,
		animal,
		dog
	];

	Animal.remove({}, function(err){
		if (err) console.error(err);
		Animal.create(animalData, function(err, animals){
			if(err) console.error(err);
			Animal.find({size: "big"}, function(err, animals){
				animals.forEach(function(animal){
					console.log(animal.name + " the " + animal.color + " " + animal.type)
				});
				db.close(function(){
					console.log("db connection closed")
				});
			});
		});
	})
})