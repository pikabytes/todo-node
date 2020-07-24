const fs = require('fs');

let listToDo = [];

const saveDB = () => {
  let data = JSON.stringify(listToDo);
  fs.writeFile('db/data.json',data, (err) => {
    if (err) throw new Error('not save', err);
  });
};

const loadDB = () => {
  try{
    listToDo = require('../db/data.json');
  } catch(e){
    listToDo = [];
  }
  
};

const create = (description) => {
  loadDB();
  let todo = {
    description,
    completed: false
  };

  listToDo.push(todo);
  saveDB();
  return todo;
};

const getList = () => {
  loadDB();
  return listToDo;
}

const update = (description, completed = true) => {
  loadDB();
  let index = listToDo.findIndex( task => {
    return task.description === description;
  });

  if( index >= 0) {
    listToDo[index].completed = completed;
    saveDB();
    return true;
  } else {
    return false;
  }
};

// const deleteTask = (description) => {
//   loadDB();
//   let index = listToDo.findIndex(task => {
//     return task.description === description
//   });
//   if (index >= 0){
//     listToDo.splice(index, 1);
//     saveDB();
//     return true;
//   } else return false;
// };

const deleteTask = (description) => {
  loadDB();
  let listFilter = listToDo.filter(task => {
    return task.description !== description
  });
  if (listToDo.length !== listFilter.length){
    listToDo = listFilter;
    saveDB();
    return true;
  } else return false;
};


module.exports = {
  create,
  update,
  deleteTask,
  getList,
}