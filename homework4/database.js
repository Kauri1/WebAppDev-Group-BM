const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: "admin",
    database: "testWad",
    host: "localhost",
    port: "5433"
});
async function createTables() {
    const client = await pool.connect();
    try {
      await client.query(`
        CREATE TABLE IF NOT EXISTS users (
          id SERIAL PRIMARY KEY,
          email VARCHAR(255) UNIQUE NOT NULL,
          password VARCHAR(255) NOT NULL
        );
      `);

      await client.query(`
        CREATE TABLE IF NOT EXISTS posts (
          id SERIAL PRIMARY KEY,
          title VARCHAR(255) NOT NULL,
          body TEXT NOT NULL,
          date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
        );
      `);
      
      console.log("Tables created (if they didn't exist)");
    } catch (error) {
      console.error('Error creating tables:', error);
    } finally {
      client.release();
    }
  }
  
  createTables();
  
  module.exports = { pool, createTables };
