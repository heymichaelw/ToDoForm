const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const app = express();
var todo = ['Do the dishes', 'Wash the car'];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');

app.get('/', function(req, res){
  res.render('index', {todo : todo});
});

app.post('/', function(req, res){
  var task = req.body.todo;
  todo.push(task);
  res.render('index', {todo: todo});
});

app.post('/todo', function(req, res){
  
});

app.listen(3000, function(){
  console.log('Express app listening for connections!');
});
