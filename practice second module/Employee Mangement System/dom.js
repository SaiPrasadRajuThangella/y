const form = document.getElementById("form");
const tbody = document.getElementById("tbody");

let employees = [];



function deleteObject(reference) {
  let empID = reference.getAttribute("data-empId");

  for (let i = 0; i < employees.length; i++) {
    if (employees[i].EmployeeId === empID) {
      employees.splice(i, 1);
      break;
    }
  }

  reference.parentNode.parentNode.remove();
}

function addEmployee(employee) {
  for (let i = 0; i < employees.length; i++) {
    if (employee.email === employees[i].email) {
      alert("Employee already exists ");
      return;
    } else if (employee.EmployeeId === employees[i].EmployeeId) {
      alert("Employee already exists");
      return;
    }
  }

  const tr = document.createElement("tr");
  tr.innerHTML = `<td>${employee.name}</td>
                    <td>${employee.email}</td>
                    <td>${employee.EmployeeId}</td>
                    <td>${employee.Company}</td>
                    <td>${employee.Designation}</td>
                    <td><button id="buttonid"onclick="deleteObject(this)" data-empId="${employee.EmployeeId}">Delete</button>
                    <button onclick="editEmployee()" >Edit</button>`;
  tr.id = "deletethis";

  tbody.appendChild(tr);
  employees.push(employee);
  form.reset();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let employee = {
    name: event.target.name.value,
    email: event.target.email.value,
    EmployeeId: event.target.EmployeeId.value,
    Company: event.target.Company.value,
    Designation: event.target.designation.value,
  };
  addEmployee(employee);
});
