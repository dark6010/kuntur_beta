var express = require('express');
var favicon = require('serve-favicon');
var app = express();
app.use(express.static('public'));
app.use(favicon(__dirname + '/public/favicon.ico'));
app.set('view engine', 'pug');
app.get('/', function (req, res) {
  res.render('index', { title: 'kuntur', message: 'testeando'});
});

app.listen(80, function () {
  console.log('corriendo en el puerto 80 como debe ser!');
});