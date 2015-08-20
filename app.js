var fs = require('fs'),
	express = require('express'),
	app = express(),
	port = 9000;

try{
function sendIndexHtml(req , res) {
	fs.readFile('index.html', function(err, text) {
		res.end( err ? 'err' : text);
	});
}
app.use(/^\/?$/, function(req , res, next) {
	sendIndexHtml(req , res);
});
app.use(/^\/index.(?:html|php|htm)$/, function(req , res, next) {
	sendIndexHtml(req , res);
});
app.use(express.static(__dirname + '/public'));
app.listen(port , function(err) {
	console.log(err || 'success at port:' + port);
});
}catch(e){console.log(e);}
