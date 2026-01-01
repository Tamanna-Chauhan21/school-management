import mysql from 'mysql2/promise';

export async function createConnection() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',             // Default MySQL user
    password: 'myaryansql19',     // ⚠️ REPLACE THIS with your actual MySQL password
    database: 'school_db',
  });
  return connection;
}