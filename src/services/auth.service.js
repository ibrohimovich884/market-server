import { pool } from "../config/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config } from "../config/env.js";

export async function register({ username, password }) {
    const hashed = await bcrypt.hash(password, 10);

    const q = `
        INSERT INTO users (username, password)
        VALUES ($1, $2)
        RETURNING id, username
    `;
    const { rows } = await pool.query(q, [username, hashed]);

    return rows[0];
}

export async function login({ username, password }) {
    const q = `SELECT * FROM users WHERE username = $1`;
    const { rows } = await pool.query(q, [username]);

    if (!rows.length) throw new Error("User not found");

    const user = rows[0];

    const match = await bcrypt.compare(password, user.password);
    if (!match) throw new Error("Invalid password");

    return jwt.sign({ id: user.id }, config.JWT_SECRET, { expiresIn: "1d" });
}
