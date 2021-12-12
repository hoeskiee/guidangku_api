const { user, host, database, port, password } = require('../secrets/dbconfiguration');
const { Pool } = require('pg');
const { use } = require('../routes');

const env = process.env.NODE_ENV || 'development';

let connectionString = {
    user: 'ytgfhdvzrgwzag',
    host: 'ec2-3-228-75-39.compute-1.amazonaws.com',
    database: 'da9upeg3vpsg2',
    port: 5432,
    password: 'fa001bf3ef98593f6034dfd96321b106ee9f68dd9fe83a815c16a4d52106816b'
}

connectionString = {
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
}

const pool = new Pool(connectionString);

module.exports = pool;

