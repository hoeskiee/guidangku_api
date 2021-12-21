// const { user, host, database, port, password } = require('../secrets/dbconfiguration');
const { Pool } = require('pg');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"

// const env = process.env.NODE_ENV || 'development';

// let connectionString = {
//     user: 'ytgfhdvzrgwzag',
//     host: 'ec2-3-228-75-39.compute-1.amazonaws.com',
//     database: 'da9upeg3vpsg2',
//     port: 5432,
//     password: 'fa001bf3ef98593f6034dfd96321b106ee9f68dd9fe83a815c16a4d52106816b',
// }

const config = {
    connectionString: 'postgres://ytgfhdvzrgwzag:fa001bf3ef98593f6034dfd96321b106ee9f68dd9fe83a815c16a4d52106816b@ec2-3-228-75-39.compute-1.amazonaws.com:5432/da9upeg3vpsg2?sslmode=require',
    // Beware! The ssl object is overwritten when parsing the connectionString
    // ssl: {
    //   rejectUnauthorized: false,
    //   strictSSL: false
    // },
    ssl: process.env.DATABASE_URL ? true : false,
  }

// connectionString = {
//     connectionString: process.env.DATABASE_URL,
//     ssl: process.env.DATABASE_URL ? true : false
// }

// const pool = new Pool(connectionString);
// pool.connect();
const pool = new Pool(config);
pool.on('connect', () => console.log('connected to db'));
module.exports = pool;