// const { user, host, database, port, password } = require('../secrets/dbconfiguration');
require('dotenv').config();
const { Pool } = require('pg');

const isProduction = process.env.NODE_ENV === "production";

// const env = process.env.NODE_ENV || 'development';

// let connectionString = {
//     user: 'ytgfhdvzrgwzag',
//     host: 'ec2-3-228-75-39.compute-1.amazonaws.com',
//     database: 'da9upeg3vpsg2',
//     port: 5432,
//     password: 'fa001bf3ef98593f6034dfd96321b106ee9f68dd9fe83a815c16a4d52106816b',
// }

const connectionString = 
    'postgres://ytgfhdvzrgwzag:fa001bf3ef98593f6034dfd96321b106ee9f68dd9fe83a815c16a4d52106816b@ec2-3-228-75-39.compute-1.amazonaws.com:5432/da9upeg3vpsg2';

// connectionString = {
//     connectionString: process.env.DATABASE_URL,
//     ssl: process.env.DATABASE_URL ? true : false
// }

const pool = new Pool({
    connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
    ssl: {
        rejectUnauthorized: false,
    }
});

pool.connect();
pool.on('connect', () => console.log('connected to db'));
