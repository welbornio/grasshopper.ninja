var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    app = module.exports = express(),
    io = require('./modules/io');

/**
 * Allow us to get data from a POST
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Connect to MongoDB
 */
// mongoose.connect('mongodb://localhost/topshelf');

app.use(express.static(__dirname + '/'));
app.use(function(req, res) {
    res.sendFile('client/index.html', {root: __dirname });
});

var port = process.env.PORT || 3000;
var server = app.listen(port);

/**
 * Bind socket.io to the server
 */
io.listen(server);

console.log("Listening on port:", port);