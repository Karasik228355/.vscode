function divide(a, b) {
  if (b === 0) {
    throw new Error("Ділення на нуль неможливе");
  }
  return a / b;
}

try {
  let result = divide(10, 0);
  console.log("Результат:", result);
} catch (error) {
  console.log("Помилка:", error.message);
}

let myName = "Роберт";

const input = document.getElementById("name");
const greeting = document.getElementById("greeting");
const button = document.getElementById("greetBtn");

button.addEventListener("click", () => {
  const name = input.value.trim() || myName;
  greeting.textContent = `Привіт, ${name}!`;
});

const nameInput = document.getElementById("name");
console.log("Елемент за ID:", nameInput);

const button1 = document.querySelector("button");
console.log("Елемент <button>:", button1);

const greeting1 = document.querySelector(".greeting");
console.log("Елемент з класом .greeting:", greeting1);

greeting.classList.add("red");

button.addEventListener("click", () => {
  console.log("Текст з <p>:", greeting.textContent);
});
