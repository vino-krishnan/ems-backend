const employees = require('../modals/employee');


const getMyProfile = async (req, res) => {
    const employeeId = req.user.id;
    console.log(employeeId);


    try {
        const employee = await employees.findDetails(employeeId);

        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' });
        }

        res.json({ employee });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

const getManagerDetail = async (req, res) => {
    const employeeId = req.user.id;
    try {
        const result = await employees.findManager(employeeId);
        if (!result) {
            return res.status(404).json({ error: 'Employee not found' });
        }
        const profile = {
            id: result.employee_id,
            name: result.employee_name,
            email: result.employee_email,
            manager: {
                name: result.manager_name,
                email: result.manager_email,
                phone: result.manager_number

            }
        };


        res.json({ profile });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
}
module.exports = {
    getMyProfile, getManagerDetail
};
