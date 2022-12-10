let clock = document.getElementById("clock");

clock.textContent = new Date().toLocaleTimeString();
setInterval(() => {
  clock.textContent = new Date().toLocaleTimeString();
}, 1000);


let today = new Date();
let currentHour = today.getHours();
let greetingMessage;

if (currentHour < 12) {
  greetingMessage = "Jó reggelt, ";
} else if (currentHour < 18) {
  greetingMessage = "Jó napot, ";
} else {
  greetingMessage = "Jó estét, ";
}

let greeting = document.getElementById("greeting");
let date = document.getElementById("date");

const months = ["Január","Február","Március","Április","Május","Június","Július","Augusztus","Szeptember","Október","November","December",];
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1;
let dd = today.getDate();

if (dd < 10) dd = "0" + dd;

const formattedToday = yyyy + "." + " " + months[today.getMonth()] + " " + dd + ".";

greeting.textContent = greetingMessage;
date.textContent = formattedToday;  
