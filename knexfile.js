const path = require("path");
module.exports = {
  development: {
    client: "postgresql",
    connection: {
      host: "isabelle.db.elephantsql.com",
      port: 5432, // porta padrão do PostgreSQL
      database: "zdrlwcrz",
      user: "zdrlwcrz",
      password: "plcT5ajr23IJZgLoLqXSLGb2OOogVfDc",
    },
    pool: {
      afterCreate: (conn, cb) => {
        conn.query("SET CONSTRAINTS ALL DEFERRED;", cb);
      },
    },
    useNullAsDefault: true,
    migrations: {
      directory: path.resolve(__dirname, "src", "database", "knex", "migrations"),
    },
    seeds: {
      directory: path.resolve(__dirname, "src", "database", "seeds"),
    },
  },
};