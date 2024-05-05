import pg from "pg";
import env from "dotenv";

env.config();

const db = new pg.Client({
    database:process.env.PG_DATABASE,
    user:process.env.PG_USER,
    password:process.env.PG_PASSWORD,
    port:process.env.PG_PORT,
    host:process.env.PG_HORT
});

export default db;