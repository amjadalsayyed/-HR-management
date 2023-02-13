"use strict";

function Employee(imageUrl, fullName, department, level) {
  this.id = 0;
  this.fullName = fullName;
  this.department = department;
  this.level = level.toLowerCase();
  this.imageUrl = imageUrl;
  this.salery = 0;
  this.netSalery = 0;
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
  this.netSalery = this.salery - (this.salery / 100) * 7.5;
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
  console.log(e);
  let imageUrl = e.target.imgUrl.value;
  let employeeName = e.target.name.value;
  let department = e.target.department.value;
  let level = e.target.level.value;
  let newEmployee = new Employee(imageUrl, employeeName, department, level);
  newEmployee.idGen();
  newEmployee.calSalery();
  newEmployee.render(); // call render
}

Employee.prototype.render = function () {
  const container = document.getElementById("content");

  const card = document.createElement("div");
  card.classList.add("card");
  container.appendChild(card);

  const cardImg = document.createElement("img");
  const cardImgContanier = document.createElement("div");
  cardImgContanier.classList.add("imgContaneir");
  card.appendChild(cardImgContanier);
  cardImgContanier.appendChild(cardImg);
  cardImg.classList.add("cardimg");
  cardImg.setAttribute("src", this.imageUrl);
  cardImg.width = "150";
  cardImg.height = "150";

  const employeeName = document.createElement("h4");
  card.appendChild(employeeName);
  employeeName.textContent = `Name: ${this.fullName} - ID: ${this.id}`;

  const departmentAndLevel = document.createElement("p");
  card.appendChild(departmentAndLevel);
  departmentAndLevel.textContent = `Deperatment: ${this.department} - Level:${this.level}`;

  const salery = document.createElement("p");
  card.appendChild(salery);
  salery.textContent = `Salery: ${this.salery}$ - Net Salery: ${this.netSalery}$`;
};

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
