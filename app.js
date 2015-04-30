var express = require('express');
var app = express();
app.get("/", function(req, res) {
	res.sendfile('app/index.html');
});

app.get(/^(.+)$/, function(req, res) {
	res.sendfile(__dirname + req.params[0]);
});

app.listen(process.env.PORT || 3000);
