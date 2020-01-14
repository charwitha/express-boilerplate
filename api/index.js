module.exports = function(app) {
	var express = require("express");
	var router = express.Router();
    const path = require('path');
    var p = path.join(__dirname, '../index.html');

	router.use(function (req,res,next) {
        console.log("/" + req.method);
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Origin", "*");
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
		next();
    });

    router.use("http://localhost:5000/", function (req, res) {
        console.log('/', req.method);
    });

    // add routes here
    require('./routes/news-routes.js')(app);
    
    app.get('/', (req,res) => {
        res.sendFile(p);
    });

    app.use("http://localhost:5000/", router);

	app.use("*", (req,res) => {
		res.sendFile(p);
	});
}
