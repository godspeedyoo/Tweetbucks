var express = require('express');
var app = express();
app.get("/", function(req, res) {
	res.sendfile('app/index.html');
});

app.use(express.static('bower_components'));

app.listen(process.env.PORT || 3000);
