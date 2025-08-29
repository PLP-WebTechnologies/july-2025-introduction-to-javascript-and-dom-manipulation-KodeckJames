// ==============================
// Part 1: Variables & Conditionals
// ==============================
const checkAgeBtn = document.getElementById("checkAgeBtn");
const ageInput = document.getElementById("ageInput");
const ageResult = document.getElementById("ageResult");

checkAgeBtn.addEventListener("click", () => {
  let age = Number(ageInput.value);

  if (isNaN(age) || age <= 0) {
    ageResult.textContent = "⚠️ Please enter a valid age!";
  } else if (age < 18) {
    ageResult.textContent = "You are a minor 🚸";
  } else {
    ageResult.textContent = "You are an adult ✅";
  }
});

// ==============================
// Part 2: Functions (Reusability)
// ==============================

// Function 1: calculate total
function calculateTotal(a, b) {
  return a + b;
}

const calcTotalBtn = document.getElementById("calcTotalBtn");
const totalResult = document.getElementById("totalResult");

calcTotalBtn.addEventListener("click", () => {
  let total = calculateTotal(50, 25);
  totalResult.textContent = `The total is: ${total}`;
});

// Function 2: format string
function greetUser(name) {
  return `Hello, ${name}! Welcome 🎉`;
}

console.log(greetUser("Student")); // Example output in console

// ==============================
// Part 3: Loops
// ==============================

const showCountdownBtn = document.getElementById("showCountdownBtn");
const countdownList = document.getElementById("countdownList");

showCountdownBtn.addEventListener("click", () => {
  countdownList.innerHTML = ""; // clear previous

  // Loop 1: Countdown using for loop
  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.textContent = i;
    countdownList.appendChild(li);
  }

  // Loop 2: Array iteration with forEach
  const fruits = ["🍎 Apple", "🍌 Banana", "🍊 Orange"];
  console.log("Fruit list:");
  fruits.forEach((fruit) => console.log(fruit));
});

// ==============================
// Part 4: DOM Manipulation
// ==============================

const toggleColorBtn = document.getElementById("toggleColorBtn");
toggleColorBtn.addEventListener("click", () => {
  document.body.classList.toggle("bg-toggled");
});

const addItemBtn = document.getElementById("addItemBtn");
const dynamicList = document.getElementById("dynamicList");
let itemCount = 0;

addItemBtn.addEventListener("click", () => {
  itemCount++;
  const li = document.createElement("li");
  li.textContent = `New item ${itemCount}`;
  dynamicList.appendChild(li);
});

// Extra DOM interaction: change text on hover
dynamicList.addEventListener("mouseover", (e) => {
  if (e.target.tagName === "LI") {
    e.target.style.color = "blue";
  }
});

dynamicList.addEventListener("mouseout", (e) => {
  if (e.target.tagName === "LI") {
    e.target.style.color = "black";
  }
});
