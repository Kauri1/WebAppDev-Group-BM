const config = require('./config');

const Pool = require('pg').Pool;
const pool = new Pool({
    user: config.DB_USER,
    password: config.DB_PASSWORD, // Enter your password here
    database: config.DB_NAME, //Try to use the same name for your database
    host: config.DB_HOST,
    port: config.DB_PORT
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