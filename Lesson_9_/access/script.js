function greet(name) {
  console.log("Привіт, " + name + "!");
}
greet("Святослав");

const age = 20;

if (age < 18) {
  console.log("Доступ заборонено");
} else {
  console.log("Доступ дозволено");
}

const car = {
  brand: "BMW",
  model: "M5 F90",
  year: 2017,
  showInfo: function () {
    console.log(
      `Марка: ${this.brand}, Модель: ${this.model}, Рік: ${this.year}`
    );
  },
};
car.showInfo();

function returnNumbers(a, b) {
  return [a, b];
}
console.log(returnNumbers(5, 10));

function isEven(number) {
  if (number % 2 === 0) {
    return "Парне";
  } else {
    return "Непарне";
  }
}
console.log(isEven(10));
console.log(isEven(7));

const students = [
  { firstName: "Роман", lastName: "Максим", age: 20 },
  { firstName: "Олена", lastName: "Влад", age: 22 },
  { firstName: "Микола", lastName: "Шевченко", age: 25 },
];

function showOlderStudents(students) {
  students.forEach((student) => {
    if (student.age > 21) {
      console.log(
        `${student.firstName} ${student.lastName}, ${student.age} років`
      );
    }
  });
}
showOlderStudents(students);

function findMax(numbers) {
  return Math.max(...numbers);
}
const nums = [13, 49, 3, 69, 21];
console.log("Найбільше число:", findMax(nums));

function getCarInfo(car) {
  return `Марка: ${car.brand}, Модель: ${car.model}, Рік: ${car.year}`;
}
const bmw = { brand: "BMW", model: "X5", year: 2021 };
console.log(getCarInfo(bmw));
