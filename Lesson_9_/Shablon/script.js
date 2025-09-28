const name = "Святослав";
const age = 13;
console.log(`Мене звати ${name} і мені ${age} років.`);

let num = 5.6789;

console.log(Math.round(num));

console.log(num.toFixed(2));

const randomNum = Math.floor(Math.random() * 100) + 1;
console.log("Випадкове число:", randomNum);

const now = new Date();
console.log("Рік:", now.getFullYear());
console.log("Місяць:", now.getMonth() + 1);
console.log("День тижня:", now.getDay());

const userAge = 13;

if (userAge < 18) {
  console.log("Доступ заборонено");
} else if (userAge <= 65) {
  console.log("Доступ дозволено");
} else {
  console.log("Вам доступ з обмеженнями");
}
