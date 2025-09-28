console.log("1a: Непарні числа від 1 до 19");
for (let i = 1; i <= 19; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

console.log("1b: Сума від 1 до 10");
let sum = 0;
let j = 1;
while (j <= 10) {
  sum += j;
  j++;
}
console.log("Сума =", sum);

console.log("1c: Масив з індексами");
const items = ["🍎", "🍌", "🍇", "🍓"];
for (let index in items) {
  console.log(`${index}: ${items[index]}`);
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}

console.log("2: Прямокутники");
const rect1 = new Rectangle(5, 10);
const rect2 = new Rectangle(7, 3);

console.log(
  `rect1 -> Площа: ${rect1.getArea()}, Периметр: ${rect1.getPerimeter()}`
);
console.log(
  `rect2 -> Площа: ${rect2.getArea()}, Периметр: ${rect2.getPerimeter()}`
);

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
console.log("3a: Перевірка email");
console.log("test@example.com ->", validateEmail("test@example.com"));
console.log("bademail@ ->", validateEmail("bademail@"));

const numbers = ["010-1234-5678", "1234-5678", "+380501234567", "050-123-4567"];
const phoneRegex = /^\d{3}-\d{4}-\d{4}$/;
const validPhones = numbers.filter((num) => phoneRegex.test(num));
console.log("3b: Українські телефони у форматі XXX-XXXX-XXXX");
console.log(validPhones);

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.introduce = function () {
  return `Привіт, я ${this.name}, мені ${this.age} років.`;
};

Person.prototype.haveBirthday = function () {
  this.age++;
};

console.log("4: Прототипи");
const p1 = new Person("Олег", 20);
const p2 = new Person("Марія", 25);

console.log(p1.introduce());
console.log(p2.introduce());

p1.haveBirthday();
console.log("Після дня народження:", p1.introduce());
