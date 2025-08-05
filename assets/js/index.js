// 1. Нехай даний масив масивів ([[1,"first"], [3,"third"]]).
// Створіть колекцію Map з цього масиву (по суті, вона співставляє значенням чисел їх порідковий числівник).
const arrayOfArray = [
  [1, "first"],
  [3, "third"],
];
const map1 = new Map(arrayOfArray);
// Отримайте кількість елементів.
console.log(map1.size);
// Додати та видалити елемент.
map1.set(2, "second");
console.log(map1);
map1.delete(3);
console.log(map1);

// Здійсніть пошук за ключом.
console.log(map1.get(1));
console.log(map1.get(2));

// Перевірити, чи є в мапі числівник для числа 2.

console.log(map1.has(2));
// Отримайте список ключів та значень окремо.

map1.forEach((value, key) => console.log(key, value));
