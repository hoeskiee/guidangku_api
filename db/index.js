// const { user, host, database, port, password } = require('../secrets/dbconfiguration');
const { Pool } = require('pg');

// const env = process.env.NODE_ENV || 'development';

// connectionString = {
//     connectionString: process.env.DATABASE_URL,
//     ssl: { rejectUnauthorized: false },
// }

const pool = new Pool({
    connectionString: process.env.DATABASE_URL || 'postgres://ytgfhdvzrgwzag:fa001bf3ef98593f6034dfd96321b106ee9f68dd9fe83a815c16a4d52106816b@ec2-3-228-75-39.compute-1.amazonaws.com:5432/da9upeg3vpsg2',
    ssl: process.env.DATABASE_URL ? true : false
});
pool.connect();