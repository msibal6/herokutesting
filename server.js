var express = require('express');
var app = express();

var mysql = require('mysql');
var connection = mysql.createConnection(process.env.JAWSDB_URL);

connection.connect();

connection.query('SELECT * FROM v6mbnziqjbmo11km.events', function(err, rows, fields) {
  if (err) throw err;

  console.log('The solution is: ', rows[0].description);
});

connection.end();

var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.render('index');
})

app.listen(port, function() {
	console.log('app running')
})
