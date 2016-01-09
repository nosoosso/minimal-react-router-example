var express = require('express');

var app = express();

var path = require('path');

app.use(express.static(__dirname + '/src/public'));

app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, 'src', 'public', 'index.html'))
});

app.listen(8000, function () {
    console.log('Server listening on http://localhost:8000, Ctrl+C to stop')
});
