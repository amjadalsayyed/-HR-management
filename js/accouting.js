"use strict";
let employeeArr = [];
function getempolyees() {
  let jsonArr = localStorage.getItem("employees");
  if (jsonArr !== null) {
    employeeArr = JSON.parse(jsonArr);
  }
}
getempolyees();

function sumofsalery(arr) {
  let sum = 0;
  arr.forEach((e) => {
    sum += e.netSalery;
  });
  return sum;
}

function avgsalery(arr) {
  return sumofsalery(arr) !== 0 ? sumofsalery(arr) / arr.length : 0;
}

function render() {
  const hero = document.getElementById("hero");
  hero.innerHTML = "";

  const tableContainer = document.createElement("div");
  hero.appendChild(tableContainer);
  tableContainer.classList.add("tableContanier");

  const table = document.createElement("table");
  tableContainer.appendChild(table);
  table.setAttribute("border", "4");
  table.setAttribute("width", "100%");

  //********************************************************header***************************** */

  const headerRow = document.createElement("tr");
  table.appendChild(headerRow);
  headerRow.classList.add("tableHeader");

  const th1 = document.createElement("th");
  headerRow.appendChild(th1);
  th1.textContent = "Department";
  const th2 = document.createElement("th");
  headerRow.appendChild(th2);
  th2.textContent = "Number of employees";
  const th3 = document.createElement("th");
  headerRow.appendChild(th3);
  th3.textContent = "Average salary";
  const th4 = document.createElement("th");
  headerRow.appendChild(th4);
  th4.textContent = "Total salary ";

  // ****************************************************AdministrationRow***************************************************

  const AdministrationRow = document.createElement("tr");
  table.appendChild(AdministrationRow);

  const admincell1 = document.createElement("td");
  AdministrationRow.appendChild(admincell1);
  admincell1.textContent = "Administration";

  let adminArr = employeeArr.filter((e) => e.department === "Administration");

  const admincell2 = document.createElement("td");
  AdministrationRow.appendChild(admincell2);
  admincell2.textContent = adminArr.length;

  const admincell3 = document.createElement("td");
  AdministrationRow.appendChild(admincell3);
  admincell3.textContent = avgsalery(adminArr);

  const admincell4 = document.createElement("td");
  AdministrationRow.appendChild(admincell4);
  admincell4.textContent = sumofsalery(adminArr);

  // ****************************************************MarketingRow***************************************************
  const marketingRow = document.createElement("tr");
  table.appendChild(marketingRow);

  const marketingcell1 = document.createElement("td");
  marketingRow.appendChild(marketingcell1);
  marketingcell1.textContent = "Marketing";

  let marketingArr = employeeArr.filter((e) => e.department === "Marketing");

  const marketingcell2 = document.createElement("td");
  marketingRow.appendChild(marketingcell2);
  marketingcell2.textContent = marketingArr.length;

  const marketingcell3 = document.createElement("td");
  marketingRow.appendChild(marketingcell3);
  marketingcell3.textContent = avgsalery(marketingArr);

  const marketingcell4 = document.createElement("td");
  marketingRow.appendChild(marketingcell4);
  marketingcell4.textContent = sumofsalery(marketingArr);

  // ****************************************************developmentRow***************************************************

  const developmentRow = document.createElement("tr");
  table.appendChild(developmentRow);

  const developmentcell1 = document.createElement("td");
  developmentRow.appendChild(developmentcell1);
  developmentcell1.textContent = "Development";

  let developmentArr = employeeArr.filter(
    (e) => e.department === "Development"
  );

  const developmentcell2 = document.createElement("td");
  developmentRow.appendChild(developmentcell2);
  developmentcell2.textContent = developmentArr.length;

  const developmentcell3 = document.createElement("td");
  developmentRow.appendChild(developmentcell3);
  developmentcell3.textContent = avgsalery(developmentArr);

  const developmentcell4 = document.createElement("td");
  developmentRow.appendChild(developmentcell4);
  developmentcell4.textContent = sumofsalery(developmentArr);

  // ****************************************************financeRow***************************************************

  const financeRow = document.createElement("tr");
  table.appendChild(financeRow);

  const financecell1 = document.createElement("td");
  financeRow.appendChild(financecell1);
  financecell1.textContent = "Finance";

  let financeArr = employeeArr.filter((e) => e.department === "Finance");

  const financecell2 = document.createElement("td");
  financeRow.appendChild(financecell2);
  financecell2.textContent = financeArr.length;

  const financecell3 = document.createElement("td");
  financeRow.appendChild(financecell3);
  financecell3.textContent = avgsalery(financeArr);

  const financecell4 = document.createElement("td");
  financeRow.appendChild(financecell4);
  financecell4.textContent = sumofsalery(financeArr);

  // ****************************************************alldepRow***************************************************

  const alldepRow = document.createElement("tr");
  table.appendChild(alldepRow);
  alldepRow.classList.add("tablefooter");

  const alldepcell1 = document.createElement("th");
  alldepRow.appendChild(alldepcell1);
  alldepcell1.textContent = "All Department";

  const alldepcell2 = document.createElement("th");
  alldepRow.appendChild(alldepcell2);
  alldepcell2.textContent = employeeArr.length;

  const alldepcell3 = document.createElement("th");
  alldepRow.appendChild(alldepcell3);
  alldepcell3.textContent = avgsalery(employeeArr);

  const alldepcell4 = document.createElement("th");
  alldepRow.appendChild(alldepcell4);
  alldepcell4.textContent = sumofsalery(employeeArr);
}

render();
