require("dotenv").config();
const environment = process.env.ENVIRONMENT;
const config = require("../../../knexfile");
const knex = require("knex");

//const knexConnection = knex(config[environment]);
const knexConnection = knex(config.development);

module.exports = knexConnection;