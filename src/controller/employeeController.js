const pool = require('../../config/dbConfig');
const asyncHandler = require('express-async-handler');

const getEmployees = asyncHandler((req, res) => {
    pool.query("SElECT * FROM employees", (error, result) => {
      if (error) {
        res.json({
          message: error.message,
          status: error.code,
        })
      }
      res.send(result);
    })
});

const getEmployeeById = asyncHandler((req, res) => {
  const id = req.params.id
  pool.query(`SELECT * FROM employees WHERE id = ?`,  [id] , (error, result) => {
    if (error) {
      res.json({
        message: error.message,
        code: error.status
      })
    }
    else {
      res.send(result);
    }
  })
})

const addEmployee = asyncHandler((req,res) => {
      pool.query("INSERT INTO employees SET ?", req.body, (error, result) => {
        if (error) {
          res.json({
            message: error.message,
            code: error.code,
          })
        }else {
          res.status(201).json({
            message: `Employee added with id: ${req.body.id}`,
            result
          })
        }
      })
});

const updateEmployee = asyncHandler((req, res) => {
  const id = req.params.id;
  pool.query(`UPDATE employees SET ? WHERE id = ?`, [req.body, id], (error, result) => {
    if (error) {
      res.json({
        message: error.message,
        code: error.code,
      })
    }
    else {
      res.json({
        message: `Employee with ID: ${id} updated successfully`,
        result,
      })
    }
  })
})

const deleteEmployees = asyncHandler((req, res) => {
  const id = req.params.id;
  pool.query(`DELETE FROM employees WHERE id = ?`, id, (error, result) => {
    if (error) {
      res.json({
        message: error.message,
        code: error.code,
      })
    }
    else {
      res.json({
        message: `Employee with ID: ${id} deleted successfully`,
        result,
      })
    }
  })
})

module.exports = {
    getEmployees,
    addEmployee,
    getEmployeeById,
    updateEmployee,
    deleteEmployees,
}