"use strict";

function Employee(id, fullName, department, level, imageUrl) {
  this.id = id;
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

Employee.prototype.render = function () {
  document.write(`${this.fullName} salery equls ${this.calSalery()} <br/> `);
};

let ghazi = new Employee(1000, "Ghazi Samer", "Administration", "Senior");
let lana = new Employee(1001, "	Lana Ali", "Finance", "Senior");
let tamara = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior");
let safi = new Employee(1003, "	Safi Walid", "Administration", "Mid-Senior");
let omar = new Employee(1004, "Omar Zaid", "Development", "Senior");
let rana = new Employee(1005, "Rana Saleh", "Development", "Junior");
let hadi = new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior");
// console.log(ghazi.calSalery());

ghazi.render();
lana.render();
tamara.render();
safi.render();
omar.render();
rana.render();
hadi.render();
