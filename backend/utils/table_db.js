const { sql } = require("../config/pgDb");

const createTables = async () => {
  console.log("Creating table....");
  // await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`;
  await sql`ALTER TABLE category ADD user_id UUID REFERENCES users(id)`;
  console.log("Created table");
  //   await sql`
  //   CREATE TABLE IF NOT EXISTS users (
  //         id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  //         email VARCHAR(50) UNIQUE NOT NULL,
  //         name VARCHAR(50) NOT NULL,
  //         password TEXT NOT NULL,
  //         avatar_img TEXT,
  //         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  //         updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  //     );`;
  // };
  //   await sql`
  // CREATE TABLE IF NOT EXISTS category (
  //       id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  //       name VARCHAR(100) NOT NULL,
  //       description TEXT NOT NULL,
  //       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  //       updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  //       category_img TEXT,
  //       category_color TEXT
  //   );`;
  // };
  //   await sql`
  //   CREATE TABLE transactions (
  //     id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  //     user_id UUID REFERENCES users(id),
  //     category_id UUID REFERENCES category(id),
  //     name TEXT NOT NULL,
  //     amount REAL NOT NULL,
  //     transaction_type transaction_type,
  //     description TEXT,
  //     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  //     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  // );`;
  //   console.log("Created table");
};
// const createTable = async () => {
//   console.log("CREATING CATEGORY TABLE..");
//   await sql`DROP TABLE IF EXISTS category`;
//   await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//   await sql`CREATE TABLE IF NOT EXISTS category(
//         id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
//         user_id UUID,
//         name VARCHAR(50) NOT NULL,
//         description TEXT NOT NULL,
//         createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//         updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//         categoryIcon TEXT,
//         categoryColor TEXT,
//         FOREIGN KEY(user_id) REFERENCES users(id)
//     )`;
//   console.log("CREATED CATEGORY TABLE.");
// };

// createTable();

createTables();

// insertData();
