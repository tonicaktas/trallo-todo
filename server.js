
'use strict';

var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('trello', ['trello']); // letar fram databas vi vill ta data ifrån
var bodyParser = require('body-parser');
var router = express.Router();


app.use(express.static(__dirname + "/public"));// hämtar statiska filer..html,css,img
app.use(bodyParser.json());



app.get('/subjectlist', function(req,res){ // ger req till contactlist route
	db.trello.find(function(err,docs){
		res.json(docs);
		});// hämtar data från db.cl

		});




app.post('/subjectlist',function(req,res){ // skickar ny data och inserts ny data in i databasen

	db.trello.insert(req.body, function(err,doc){
		res.json(doc);


		}

		); // end insert function


	}); //end app.post

app.delete("/subjectlist/:id",function(req,res){ // radera från db med hjälp av object id
	var id = req.params.id;

	db.trello.remove({_id: mongojs.ObjectId(id)}, function(err,doc){
		res.json(doc);
		});
	});


app.get('/subjectlist/:id',function(req,res){ // hämtar bloggen till formulär för editering
	var id = req.params.id;

	db.trello.findOne({_id: mongojs.ObjectId(id)},function(err,doc){
		res.json(doc);
		});
	});

app.put('/subjectlist/:id', function(req,res){
	var id = req.params.id;

	db.trello.findAndModify({query: {_id: mongojs.ObjectId(id)},// väljer object det vi vill ändra
		update: {$set: { name: req.body.name,
										prio: req.body.prio,
										status: req.body.status,
										links: req.body.links,
										notes: req.body.notes}},
		new: true}, function(err, doc){
			res.json(doc);
			});
	});


app.listen(3000);
