const db = require('../../config/dbConfig');

const Employee = (employee) => {
    this.first_name = employee.first_name;
    this.last_name = employee.last_name;
    this.email = employee.email;
    this.phone = employee.phone;
    this.organization = employee.organization;
    this.salary = employee.salary;
    this.status = employee.status ? employee.status : 1;
    this.createdAt = new Date();
    this.updatedAt = new Date();
}