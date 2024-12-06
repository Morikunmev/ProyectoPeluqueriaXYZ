import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
  port: 5432,
  host: "localhost",
  user: "postgres",
  password: "xlgricky20131415",
  database: "tasksdb",
});

pool.on("connect", () => {
  console.log("Database connection established");
});
