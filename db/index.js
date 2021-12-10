const { user, host, database, port, password } = require('../secrets/dbconfiguration');
const { Pool } = require('pg');

const pool = new Pool({ user, host, database, port, password});

module.exports = pool;

