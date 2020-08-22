var knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : '93.188.166.54',
      user : 'root',
      password : 'connectdelivery18',
      database : 'connect_api'
    }
  });

  module.exports = knex;