const pool = require('./db');
const bcrypt = require('bcryptjs');

class User {
    static findByEmail = async (email) => {
        const { rows } = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        if (rows.length > 0) {
            return rows[0];
        }
        return null;
    }

    static findByUsername = async (username) => {
        const { rows } = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
        if (rows.length > 0) {
            return rows[0];
        }
        return null;
    }

    static create = async (username, email, password) => {
        const hashPwd = await bcrypt.hash(password, 10);
        const { rows } = await pool.query(
            'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *', 
            [username, email, hashPwd]
        )
        return rows[0];
    }
}    

module.exports = User;