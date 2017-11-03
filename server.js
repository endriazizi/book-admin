var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var book = require('./routes/book');
var admin = require('./routes/admin');
var customer = require('./routes/customer');
var genre = require('./routes/genre');
var order = require('./routes/order');
var port = 3000;
var app = express();
const fallback = require('express-history-api-fallback');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, sid")
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE, PUT");
    next();
});

app.set('views', path.join(__dirname, 'dist'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/book', book);
app.use('/admin', admin);
app.use('/customer', customer);
app.use('/genre', genre);
app.use('/order', order);

app.use(fallback(__dirname + '/dist/index.html'));

app.listen(port, function () {
    console.log('SERVER RUNNING PORT ' + port);
});