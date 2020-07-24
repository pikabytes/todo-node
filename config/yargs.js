const  optCreate = {
  description: {
    demand: true, 
    alias: 'd',
    desc: 'to-do description'
  }
};

const  optUpdate = {
  description: {
    demand: true, 
    alias: 'd',
    desc: 'to-do description'
  },
  complete: {
    alias: 'c',
    default: true,
    desc: 'to-do completed'
  }
};



const argv = require("yargs")
  .command('create', 'create to-do', optCreate)
  .command('update', 'update to-do', optUpdate)
  .command('delete', 'delete to-do', optCreate)
  .help()
  .argv;


module.exports = {
  argv
}