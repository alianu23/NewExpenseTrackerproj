const { sql } = require("../config/pgDb");

const createTables = async () => {
  console.log("Creating table....");
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`;
  await sql`
  CREATE TABLE IF NOT EXISTS users (
        id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
        email VARCHAR(50) UNIQUE NOT NULL,
        name VARCHAR(50) NOT NULL,
        password TEXT NOT NULL,
        avatar_img TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );`;
  console.log("Created table");
};

const insertData = () => {};

createTables();

insertData();
