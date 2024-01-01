require("dotenv").config();

let stringPassword = string(process.env.POSTGRES_PASSWORD);
let stringUser = string(process.env.POSTGRES_USER);

module.exports = {
  development: {
    url: `postgres://${stringUser}:${stringPassword}@${process.env.POSTGRES_HOST}:5432/${process.env.POSTGRES_DATABASE}`,
    host: process.env.POSTGRES_HOST,
    user: stringUser,
    password: stringPassword,
    // database: process.env.POSTGRES_DATABASE,
    // "username": process.env.DB_USERNAME,
    // "password": process.env.DB_PASSWORD,
    // "database": process.env.DB_NAME,
    // "host": process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    secret_key: process.env.SECRET_KEY,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
  test: {
    url: `postgres://${stringUser}:${stringPassword}@${process.env.POSTGRES_HOST}:5432/${process.env.POSTGRES_DATABASE}`,
    host: process.env.POSTGRES_HOST,
    user: stringUser,
    password: stringPassword,
    // database: process.env.POSTGRES_DATABASE,
    // "username": process.env.DB_USERNAME,
    // "password": process.env.DB_PASSWORD,
    // "database": process.env.DB_NAME,
    // "host": process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    secret_key: process.env.SECRET_KEY,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
  production: {
    url: `postgres://${stringUser}:${stringPassword}@${process.env.POSTGRES_HOST}:5432/${process.env.POSTGRES_DATABASE}`,
    host: process.env.POSTGRES_HOST,
    user: stringUser,
    password: stringPassword,
    // database: process.env.POSTGRES_DATABASE,
    // "username": process.env.DB_USERNAME,
    // "password": process.env.DB_PASSWORD,
    // "database": process.env.DB_NAME,
    // "host": process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    secret_key: process.env.SECRET_KEY,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
