const manager = require('../modals/manager');

const getEmployees = async (req, res) => {
    try {
        const managerId = req.user.id;

        const employees = await manager.findEmployee(managerId);

        res.json({ employees });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};


const getEmployeeById = async (req, res) => {
    const managerId = req.user.id;
    const employeeId = req.params.employeeId;
    console.log(managerId, employeeId);


    try {
        const employee = await manager.findEmployeeById(managerId, employeeId);

        if (!employee) {
            return res.status(404).json({ error: 'Employee not found or unauthorized' });
        }

        res.json({ employee });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

const addNewEmployee = async (req, res) => {
    try {
        const managerId = req.user.id;
        console.log("manager iddddddd",managerId);
        
        const newEmp = await manager.addEmployee({ ...req.body, managerId });
        console.log(newEmp);

        res.status(201).json({ message: 'Employee added successfully', employeeId: newEmp.insertId });
    } catch (err) {
        console.log(err);

        res.status(500).json({ error: 'Failed to add employee' });
    }
}
const updateEmployeeDetail = async (req, res) => {
    try {
        const { id } = req.params;
        const manager_id = req.user.id;
        console.log(id, manager_id, req.body, "updateeeeeeeeee");

        await manager.updateEmployeeInfo(id, manager_id, req.body);
        res.json({ message: 'Employee updated successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to update employee' });
    }
}
const deleteEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        const manager_id = req.user.id;
        await manager.deleteEmployeeInfo(id, manager_id);
        res.json({ message: 'Employee deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete employee' });
    }
}
module.exports = {
    getEmployeeById, getEmployees, addNewEmployee, deleteEmployee, updateEmployeeDetail
};