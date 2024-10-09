const { Pool } = require('pg');
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'my_database1',
    password: 'rootroot',
    port: 5432,
    });
    
    module.exports = pool;