import pkg from "pg";
import { config } from "./env.js";

const { Pool } = pkg;

export const pool = new Pool({
    connectionString: config.DATABASE_URL,
});

pool.connect()
    .then(() => console.log("📦 PostgreSQL connected"))
    .catch(err => console.error("DB error:", err));
