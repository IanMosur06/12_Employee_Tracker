const menuQuestions = [
  {
    name: "menu",
    type: "list",
    message: "Where would you like to go?",
    choices: [
      "View All Departments",
      "View All Employees",
      "View All Roles",
      "Update Employee Role",
      "Add a Department",
      "Add an Employee",
      "Add a Role",
      "Quit",
    ],
  },
];

function addEmployeeQ(rolesArray, managersArray) {
  return [
    {
      name: "firstName",
      type: "input",
      message: "What is the employees first name?",
    },
    {
      name: "lastName",
      type: "input",
      message: "What is the employees last name?",
    },
    {
      name: "role",
      type: "list",
      message: "What is the role of the employee?",
      choices: rolesArray,
    },
    {
      name: "manager",
      type: "list",
      message: "Who is the manager of this employee?",
      choices: managersArray,
    },
  ];
}

const departmentQ = [
  {
    name: "name",
    type: "input",
    message: "What is the name of the department?",
  },
];

function addRoleQ(deptArray) {
  return [
    {
      name: "title",
      type: "input",
      message: "What is the title for this role?",
    },
    {
      name: "salary",
      type: "input",
      message: "What is the salary for this role?",
      validate: (name) => {
        var valid = +name;
        return valid.toString() !== "NaN" ? true : "Not a number. Try again.";
      },
    },
    {
      name: "deptId",
      type: "list",
      message: "Which department is this role in?",
      choices: deptArray,
    },
  ];
}

function updateEmployeeQ(rolesArray, employeesArray) {
  return [
    {
      name: "name",
      type: "list",
      message: "What is the name of the employee?",
      choices: employeesArray,
    },
    {
      name: "role",
      type: "list",
      message: "What is the new role of this employee?",
      choices: rolesArray,
    },
  ];
}

module.exports = {
  menuQuestions,
  addEmployeeQ,
  departmentQ,
  addRoleQ,
  updateEmployeeQ,
};
