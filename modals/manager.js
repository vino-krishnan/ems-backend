const db = require('../config/db');

const manager = {
    findEmployee: async (manager_id) => {
        const [rows] = await db.execute('SELECT * FROM employees WHERE manager_id = ?', [manager_id]);
        // console.log(rows[0])
        return rows;
    },
    findEmployeeById: async (managerId, employeeId) => {
        console.log(managerId, employeeId, "in modalllll")
        const [rows] = await db.execute('SELECT * FROM employees WHERE  manager_id = ? AND user_id = ? ', [managerId, employeeId]);
        console.log(rows, "ffffffffffff")
        return rows[0];
    },
    addEmployee: async (data) => {

        const { user_id, full_name, email, phone_number, location, date_of_joining, blood_group, gender,manager_id } = data;

        console.log(user_id, full_name, email, phone_number, location, date_of_joining, blood_group, gender, manager_id)

        console.log(manager_id,"iiiiiiiiiiiiii");
        

        try {
            const [rows] = await db.execute('INSERT INTO employees (user_id, full_name, email, phone_number, location, date_of_joining, blood_group, gender, manager_id) VALUES (?, ?, ?, ?,?,?,?,?,?)',
                [user_id, full_name, email, phone_number, location, date_of_joining, blood_group, gender, manager_id])
            console.log(rows, "ffffffffffff")
            return rows.insertId;
        } catch (error) {
            console.log(error);

        }
    },
    updateEmployeeInfo: async (employeeId, managerId, data) => {
        const { full_name, email, phone_number, location, date_of_joining, blood_group, gender } = data;

        console.log(full_name, email, phone_number, location, date_of_joining, blood_group, gender, employeeId, managerId)

        // try {

        const [result] = await db.execute(
            'UPDATE employees SET full_name = ?, email = ?, phone_number = ?,location=?,date_of_joining=?, blood_group=?, gender=?  WHERE user_id = ? AND manager_id = ?',
            [full_name, email, phone_number, location, date_of_joining, blood_group, gender, employeeId, managerId]
        );
        return result;
        // } catch (error) {
        //     console.log(error);

        // }

    },
    deleteEmployeeInfo: async (employeeId, managerId) => {
        console.log(managerId, employeeId);

        const [result] = await db.execute('DELETE FROM employees WHERE user_id = ? AND manager_id = ?', [employeeId, managerId]);
        console.log(result);

        return result;
    }
}



module.exports = manager;
