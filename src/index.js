let now = new Date();
let date = now.getDate();
let time = now.getHours();
let mins = now.getMinutes();
let day = now.getDay();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let cur = document.querySelector(".cur_date");
if (mins < 10) {
  cur.innerHTML = days[day] + " " + time + ":0" + mins;
} else {
  cur.innerHTML = days[day] + " " + time + ":" + mins;
}

let form_nm = document.querySelector("form");
form_nm.addEventListener("submit", submit_form);

function submit_form(event) {
  event.preventDefault();
  let city = document.querySelector("#city");
  let city_name = document.querySelector("h3");
  city_name.innerHTML = city.value;
}

let centi = document.querySelector(".centi");
centi.addEventListener("click", to_centi);

let far = document.querySelector(".far");
far.addEventListener("click", to_far);

function to_centi() {
  let D = 53;
  let degree = document.querySelector(".degree");
  let formula_C = Math.round((5 / 9) * (D - 32));
  degree.innerHTML = formula_C;
}

function to_far() {
  let D = 12;
  let degree = document.querySelector(".degree");
  let formula_F = Math.round((9 * D) / 5 + 32);
  degree.innerHTML = formula_F;
}
