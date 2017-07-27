const {ObjectId} = requre('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '597a26e51d6cb5051663b553';

if (!ObjectId.isValid) {
  console.log('Id not valid');
} else {

  Todo.find({
    _id: id
  }).then((todos)=>{
    console.log('Todos', todos);
  });

  Todo.findOne({
    completed: false
  }).then((todo)=>{
    console.log('Todo', todo);
  });

  Todo.findById(id).then((todo)=>{
    if (!todo) {
      return console.log('Id not found');
    }
    console.log('Todo by id', todo);
  }).catch((e) => console.log(e));

}