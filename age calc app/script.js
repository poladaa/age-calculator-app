"use strict";

const dayError = document.querySelector(".day-error");
const monthError = document.querySelector(".month-error");
const yearError = document.querySelector(".year-error");
//
const dayResult = document.querySelector(".day-result");
const monthResult = document.querySelector(".month-result");
const yearResult = document.querySelector(".year-result");
//
const submit = document.querySelector(".btn");
//
const inputDay = document.getElementById("day");
const inputMonth = document.getElementById("month");
const inputYear = document.getElementById("year");

///// ERRORS
const inputRequiredError = "This field is required";
const inputDayError = "Must be a valid day";
const inputMonthError = "Must be a valid month";
const inputYearError = "Must be a valid year";

// // functions
function CheckDayInput() {
  let value = inputDay.value;
  if (value == "") {
    dayError.innerHTML = inputRequiredError;
    return false;
  } else if (value < 1 || value > 31) {
    dayError.innerHTML = inputDayError;
    return false;
  } else {
    dayError.innerHTML = "";
    return true;
  }
}

function CheckMonthInput() {
  let value = inputMonth.value;
  if (value == "") {
    monthError.innerHTML = inputRequiredError;
    return false;
  } else if (value < 1 || value > 12) {
    monthError.innerHTML = inputMonthError;
    return false;
  } else {
    monthError.innerHTML = "";
    return true;
  }
}

function CheckYearInput() {
  let value = inputYear.value;
  let currentYear = new Date().getFullYear();

  if (value == "") {
    yearError.innerHTML = inputRequiredError;
    return false;
  } else if (value > currentYear) {
    yearError.innerHTML = inputYearError;
    return false;
  } else {
    yearError.innerHTML = "";
    return true;
  }
}

function calcAge(birthday) {
  let birthdate = new Date(birthday);
  let today = new Date();

  let years = today.getFullYear() - birthdate.getFullYear();
  let months = today.getMonth() - birthdate.getMonth();
  let days = today.getDate() - birthdate.getDate();

  if (months < 0 || (months === 0 && days < 0)) {
    years--;
    if (months === 0) {
      months = 11;
    } else {
      months = 12 + months;
    }
    days = 30 + days;
  }

  yearResult.innerHTML = years;
  monthResult.innerHTML = months;
  dayResult.innerHTML = days;
}

submit.addEventListener("click", (e) => {
  e.preventDefault();
  let day = CheckDayInput();
  let month = CheckMonthInput();
  let year = CheckYearInput();
  if (!day || !month || !year) return;
  let birthday = `${inputMonth.value}/${inputDay.value}/${inputYear.value}`;
  calcAge(birthday);
});
