const express = require('express');
const router = express.Router();
const { getEmployees, 
    addEmployee, 
    getEmployeeById,
    updateEmployee,
    deleteEmployees } = require('../controller/employeeController');

router.get('/', getEmployees)

router.get('/:id', getEmployeeById)

router.post('/',addEmployee)

router.put('/:id',updateEmployee)

router.delete('/:id', deleteEmployees)


module.exports = router;