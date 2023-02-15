"use strict";
let employeeArr = [];
function Employee(imageUrl, fullName, department, level) {
  this.id = 0;
  this.fullName = fullName;
  this.department = department;
  this.level = level.toLowerCase();
  this.imageUrl = imageUrl;
  this.salery = 0;
  this.netSalery = 0;
  employeeArr.push(this);
}

Employee.prototype.calSalery = function () {
  switch (this.level) {
    case "junior":
      this.salery = Math.floor(Math.random() * (1000 - 500)) + 500;
      break;
    case "mid-senior":
      this.salery = Math.floor(Math.random() * (1500 - 1000)) + 1000;
      break;
    case "senior":
      this.salery = Math.floor(Math.random() * (2000 - 1500)) + 1500;
      break;
    default:
      break;
  }
  this.netSalery = Math.floor(this.salery - (this.salery / 100) * 7.5);
  return this.netSalery;
};

Employee.prototype.idGen = function () {
  return (this.id = Number(
    Math.floor(Math.random() * Date.now())
      .toString()
      .slice(0, 4)
  ));
};

let employeeForm = document.getElementById("employeeForm");
employeeForm.addEventListener("submit", addNewEmployeeHandler);

function addNewEmployeeHandler(e) {
  e.preventDefault();
  let imageUrl = e.target.imgUrl.value;
  let employeeName = e.target.name.value;
  let department = e.target.department.value;
  let level = e.target.level.value;
  let newEmployee = new Employee(imageUrl, employeeName, department, level);
  newEmployee.idGen();
  newEmployee.calSalery();

  let jsonArr = JSON.stringify(employeeArr);
  localStorage.setItem("employees", jsonArr);

  render();
}

function render() {
  const container = document.getElementById("content");
  container.innerHTML = "";

  for (let i = 0; i < employeeArr.length; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    container.appendChild(card);

    const cardImg = document.createElement("img");
    const cardImgContanier = document.createElement("div");
    cardImgContanier.classList.add("imgContaneir");
    card.appendChild(cardImgContanier);
    cardImgContanier.appendChild(cardImg);
    cardImg.classList.add("cardimg");
    cardImg.setAttribute("src", employeeArr[i].imageUrl);
    cardImg.width = "150";
    cardImg.height = "150";

    const employeeName = document.createElement("h4");
    card.appendChild(employeeName);
    employeeName.textContent = `Name: ${employeeArr[i].fullName} - ID: ${employeeArr[i].id}`;

    const departmentAndLevel = document.createElement("p");
    card.appendChild(departmentAndLevel);
    departmentAndLevel.textContent = `Deperatment: ${employeeArr[i].department} - Level:${employeeArr[i].level}`;

    const salery = document.createElement("p");
    card.appendChild(salery);
    salery.textContent = `Salery: ${employeeArr[i].salery}$ - Net Salery: ${employeeArr[i].netSalery}$`;
  }
}

function getempolyees() {
  let jsonArr = localStorage.getItem("employees");
  if (jsonArr !== null) {
    employeeArr = JSON.parse(jsonArr);
  }
}
getempolyees();
render();
// Employee.prototype.render = function () {
//   document.write(`${this.fullName} salery equls ${this.calSalery()} <br/> `);
// };

// let ghazi = new Employee(1000, "Ghazi Samer", "Administration", "Senior");
// let lana = new Employee(1001, "	Lana Ali", "Finance", "Senior");
// let tamara = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior");
// let safi = new Employee(1003, "	Safi Walid", "Administration", "Mid-Senior");
// let omar = new Employee(1004, "Omar Zaid", "Development", "Senior");
// let rana = new Employee(1005, "Rana Saleh", "Development", "Junior");
// let hadi = new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior");
// // console.log(ghazi.calSalery());

// ghazi.render();
// lana.render();
// tamara.render();
// safi.render();
// omar.render();
// rana.render();
// hadi.render();
