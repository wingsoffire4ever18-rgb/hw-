
let name = localStorage.getItem('studentName');


let greetingElement = document.getElementById('greeting');
let hintElement = document.getElementById('hint');


if (name) {

  greetingElement.textContent = "Welcome, " + name + "!";
} else {

  greetingElement.textContent = "Welcome, Friend!";
  hintElement.classList.remove('hidden');
}