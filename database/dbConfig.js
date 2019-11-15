const knex = require('knex');

// const knexConfig = require('../knexfile');
const dbEnv = process.env.DB_ENV || 'development';

const config = require('../knexfile.js');

// module.exports = knex(knexConfig.development);
module.exports = knex(config[dbEnv]);
