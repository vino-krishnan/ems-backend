const express = require('express');
const router = express.Router();

const employeeController  = require('../controller/employeeController');
const { decodeToken } = require('../middleware/auth');
const {  allowEmployee } = require('../middleware/roleCheck');

router.get('/profile', decodeToken, allowEmployee, employeeController.getMyProfile);
router.get('/manager',decodeToken, allowEmployee, employeeController.getManagerDetail)

module.exports = router;
