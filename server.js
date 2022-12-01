
const inquirer = require('inquirer');
const mysql = require('mysql2');



// New Department
function newDepartment() {
    inquirer
    .prompt()
    .then((response) => {
        db.query(add, response.name, function (err, results) {
            console.log(`New department ${response.name} was added!`);
            init();
        });
    });
};

// New Role




// Questions