require("dotenv").config();

module.exports = {
  "development": {
    "username": process.env.db_user,
    "password": process.env.db_password,
    "database": process.env.db_database,
    "host": process.env.db_server,
    "dialect": process.env.db_dialect,
    "port": process.env.db_port,
    "logging": false
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "logging": false

  },
  "production": {
    "username": process.env.db_user,
    "password": process.env.db_password,
    "database": process.env.db_database,
    "host": process.env.db_server,
    "dialect": process.env.db_dialect,
    "port": process.env.db_port,
    "logging": false
  }
}




