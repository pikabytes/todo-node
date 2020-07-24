const argv = require('./config/yargs').argv;
const todo = require('./to-do/to-do');
const colors = require('colors');
const { update } = require('./to-do/to-do');
let command = argv._[0];

switch( command ){
  case 'create':
    let task = todo.create(argv.description);
    console.log(task);
    break;
  case 'list':
    let list = todo.getList();
    for( let task of list){
      console.log(`=========To Do=========`.green);
      console.log(task.description);
      console.log(`Status: `, task.completed);
      console.log(`=======================`.green);
    }
    break;
  case 'update':
    let updated = todo.update(argv.description, argv.completed);
    console.log( updated);
    break;
  case 'delete':
    let deleted = todo.deleteTask(argv.description);
    console.log(deleted);
    break;
  default:
    console.log('command does not exist');
    break;
}