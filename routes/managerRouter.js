const express = require('express');
const router = express.Router();

const managerController = require('../controller/managerController');
const { decodeToken } = require('../middleware/auth');
const { allowManager } = require('../middleware/roleCheck');

router.get('/employees', decodeToken, allowManager, managerController.getEmployees);
router.get('/employee/:employeeId', decodeToken, allowManager, managerController.getEmployeeById);
router.post('/employee/add', decodeToken, allowManager, managerController.addNewEmployee);
router.put('/employee/:id', decodeToken, allowManager, managerController.updateEmployeeDetail);
router.delete('/employee/:id', decodeToken, allowManager, managerController.deleteEmployee);

module.exports = router;
