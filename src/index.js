var $ = require('jquery');
var str = require('./constant');
require('./main.css');

var App = function() {
    var htmlstr = str;
    $('body').prepend('<h1>' + htmlstr + '!!!</h1>');
};

App.prototype.run = function() {
    $('body').prepend('<h1>Run application</h1>');
};

var app = new App();
app.run();
