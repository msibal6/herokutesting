var express = require('express');
const { join } = require("path");

var app = express();

var mysql = require('mysql');
var connection = mysql.createConnection(process.env.JAWSDB_URL);

connection.connect();

// This is a single query
var insertion = "INSERT INTO v6mbnziqjbmo11km.user_account (`id`, `user_name`, `password`, `email`, `day`, `time`, `content_pref`) VALUES ('5', 'user5', 'adf', 'dvxcv', '4', '10', '3')";
connection.query("SELECT * from v6mbnziqjbmo11km.user_account", function(err, rows, fields) {
  if (err) throw err;

  console.log('The solution is: ', rows[0].user_name);
});

connection.end();

var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));
app.get("/auth_config.json", (req, res) => {
  res.sendFile(join(__dirname, "auth_config.json"));
});


app.get('/', function(req, res) {
	res.render('index');
})

app.listen(port, function() {
	console.log('app running')
})
