const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const app = express();
var todoList = ['Do the dishes', 'Wash the car'];
var completedTasks = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');

app.get('/', function(req, res){
  var idx=0,
  context = {
    todoList : todoList,
    completedTasks : completedTasks,
    id: function(){
      return idx++;
    }
  };

  res.render('index', context);
});

app.post('/', function(req, res){
/*
if (req.body.todo){
  var task = req.body.todo;
  todo.push(task);
  res.render('index', {todo: todo});
} else {

}
*/

  var task = req.body.todo;
  todoList.push(task);
  res.redirect('/');
  // res.render('index', {todoList: todoList});
});

app.post('/todo/:id/complete/', function(req, res){
  var id = Number(req.params.id);
  var selection = todoList[id];
  completedTasks.push(selection);
  todoList.splice(id, 1);
  res.redirect('/');
});

app.listen(3000, function(){
  console.log('Express app listening for connections!');
});
