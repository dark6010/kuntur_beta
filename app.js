var express = require('express');
var app = express();
app.set('view engine', 'pug');
app.get('/', function (req, res) {
  res.render('index', { title: 'kuntur', message: 'testeando'});
});

app.listen(80, function () {
  console.log('corriendo en el puerto 80 como debe ser!');
});