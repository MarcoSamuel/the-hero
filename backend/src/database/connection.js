const knex = require('knex');

const configuration = require('../../knexfile');

const connection = knex(configuration.development); //  importa a conecao em desenvolvimento do knexfile

module.exports = connection;