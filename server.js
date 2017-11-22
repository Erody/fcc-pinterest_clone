const express = require('express');
const path = require('path');
const app = express();
const request = require('request');

const proxyUrl = require('./package.json').proxy;


app.use(express.static(path.join(__dirname, 'build')));

app.use('/api', function(req, res) {
	const url = proxyUrl + req.url;
	req.pipe(request({ qs:req.query, uri: url })).pipe(res);
});

app.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});



app.listen(process.env.PORT || 9000);