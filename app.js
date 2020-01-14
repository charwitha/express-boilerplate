var express = require('express');
var app = express();
// var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var port = 5000;

const base_url = "http://localhost:5000/";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.set('base', base_url);
app.use('/static', express.static('static'));

require('./api/index.js')(app);

// If no DB connection
app.listen(port, () => {
    console.log("Server listening to port "+ port);
});

// If mongoDB connection is available, un-comment

// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://127.0.0.1:27017/mm-generator', {useNewUrlParser: true});

// mongoose.connection.on('open', function(err, doc) {
//     if(err) return console.err(err);

//     app.listen(port, '0.0.0.0', () => {
//         console.log("Server listening to port "+ port);
//     });

//     console.log("Successfully connected to MongoDB.");
// });
