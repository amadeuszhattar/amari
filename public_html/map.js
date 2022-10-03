const allOfferBtn = document.getElementById("all-offers");
const withSalaryBtn = document.getElementById("with-salary");

console.log(allOfferBtn, withSalaryBtn);

allOfferBtn.onclick = function () {
  allOfferBtn.style.backgroundColor = "rgb(36, 36, 36)";
  withSalaryBtn.style.backgroundColor = "#393939";
};

withSalaryBtn.onclick = function () {
  withSalaryBtn.style.backgroundColor = "rgb(36, 36, 36)";
  allOfferBtn.style.backgroundColor = "#393939";
};



