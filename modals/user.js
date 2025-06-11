const db = require('../config/db');

const User = {
    findByUsername: async (username) => {
        const [rows] = await db.execute('SELECT * FROM users WHERE username = ?', [username]);
        console.log(rows[0])
        return rows[0];
    },
    addNewUser: async (params) => {

    }
};



module.exports = User;
