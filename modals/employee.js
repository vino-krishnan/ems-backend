const db = require('../config/db');

const employee = {
    findDetails: async (employeeId) => {
        console.log(employeeId);

        const [rows] = await db.execute('SELECT * FROM employees WHERE user_id = ?', [employeeId]);
        console.log(rows[0]);

        return rows[0];
    },

    findManager: async (employeeId) => {
        console.log(employeeId);

        const [rows] = await db.execute(`SELECT 
         e.user_id AS employee_id, e.full_name AS employee_name, e.email AS employee_email, 
         m.full_name AS manager_name, m.email AS manager_email, m.phone_number AS manager_number
       FROM employees e
       JOIN managers m ON e.manager_id = m.user_id
       WHERE e.user_id = ?`,
            [employeeId])
        return rows[0]
    }
};

module.exports = employee;
