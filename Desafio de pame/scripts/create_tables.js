const { options, sqliteOptions } = require('../src/models/databases');

const knexMySQL = require('knex')(options);
const knexSQLite = require('knex')(sqliteOptions);

// knexMySQL.schema.createTable('products', (table) => {
//   table.increments('id');
//   table.string('name');
//   table.string('description');
//   table.integer('code');
//   table.string('photo');
//   table.string('price');
//   table.integer('stock');
// })
//   .then(() => console.log('Table created'))
//   .catch((error) => { console.error(error); throw error; })
//   .finally(() => knexMySQL.destroy())


  //chat del sockets

  knexSQLite.schema.createTable('messages', (table) => {
    table.increments('id');
    table.string('name');
    table.string('messages');
  })
    .then(() => console.log('Table created'))
    .catch((error) => { console.error(error); throw error; })
    .finally(() => knexSQLite.destroy())