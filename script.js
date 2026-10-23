// ===== 1. SAY HELLO BUTTON =====
const helloBtn = document.getElementById("helloBtn");
const helloText = document.getElementById("helloText");

helloBtn.addEventListener("click", function () {
  const name = prompt("What is your name?");
  if (name) {
    helloText.textContent = "Hello, " + name + "! Welcome to my website 😄";
  }
});

// ===== 2. DARK MODE BUTTON =====
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "☀️";
  } else {
    themeBtn.textContent = "🌙";
  }
});
