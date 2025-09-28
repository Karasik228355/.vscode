const username = "Karas";
const email = "test@gmail.com";

const emailPattern = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;

if (username !== "" && emailPattern.test(email)) {
  console.log("Успішна реєстрація");
} else {
  console.log("Помилка даних");
}

const products = ["яблуко", "хліб", "молоко", "сир", "печиво"];

const search = "молоко";

if (products.includes(search)) {
  console.log("Товар знайдено");
} else {
  console.log("Немає в наявності");
}
