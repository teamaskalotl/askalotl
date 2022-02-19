//postgres://uqtxmxus:B_jVLwDF0iMXXrFfINggYQcc4QU-YVP7@tyke.db.elephantsql.com/uqtxmxus

const { Pool } = require('pg');

const PG_URI = 'postgres://uqtxmxus:B_jVLwDF0iMXXrFfINggYQcc4QU-YVP7@tyke.db.elephantsql.com/uqtxmxus';

const pool = new Pool({
    connectionString: PG_URI
})

module.exports = {
    query: (text, params, callback) => {
        console.log('executed query', text);
        return pool.query(text, params, callback);
    }
};