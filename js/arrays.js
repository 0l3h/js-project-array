'use strict';

// Массив случайных чисел от одного до 100
console.group("0. Массив случайных чисел от одного до 100");
const numbers = [1, 2, 3, 4, 5, 6, 7];

numbers.forEach(randomizeNumbers);

function randomizeNumbers(item, index) {
    numbers[index] = Math.floor(Math.random() * 100);
}

console.table(numbers);
console.groupEnd();

// Удаление последнего элемента и добавление по одному в начало и конец
console.group("1. Удаление последнего элемента и добавление по одному в начало и конец");
numbers.pop();
numbers.push(0);
numbers.unshift(2)
console.table(numbers);
console.groupEnd();

// Размер массива
console.group("2. Размер массива");
console.log(numbers.length);
console.groupEnd();

// Числа с четным индексом
console.group("3. Числа с четным индексом");
console.table(numbers.filter(isEvenIndex));

function isEvenIndex(value, index) {
    return index % 2 === 0;
}
console.groupEnd();

// Четные числа
console.group("4. Четные числа");
console.table(numbers.filter(isEvenValue));

function isEvenValue(value) {
    return value % 2 === 0;
}
console.groupEnd();

// Индексы нулевых элементов
console.group("5. Индексы нулевых элементов");
numbers.map(showIndexes);

function showIndexes(value, index){
    return value === 0? console.log(index) : false;
}
console.groupEnd();

// Количество нулевых элементов
console.group("6. Количество нулевых элементов");
console.log(numbers.filter(isEqualsToZero).length);

function isEqualsToZero(value) {
    return value === 0;
}
console.groupEnd();

// Массив положительных чисел
console.group("7. Массив положительных чисел");
const integerNumbers = [-1, 5, 0, 9, -10];
console.table(integerNumbers.filter(positiveNumbers));

function positiveNumbers(value) {
    return value > 0;
}
console.groupEnd();

// Массив элементов в квадрате
console.group("8. Массив элементов в квадрате");
console.table(integerNumbers.map(powerOf2));

function powerOf2(value) {
    return value ** 2;
}
console.groupEnd();

// Проверка положительности всех чисел
console.group("9. Проверка положительности всех чисел");
console.log(integerNumbers.every(isPositive));

function isPositive(value) {
    return typeof value === "number" && value > 0;
}
console.groupEnd();

// Проверка наличия отрицательных элементов
console.group("10. Проверка наличия отрицательных элементов");
console.log(integerNumbers.some(isNegative));

function isNegative(value) {
    return value < 0;
}
console.groupEnd();

// Массив элементов в кубе
console.group("11. Массив элементов в кубе");
console.table(integerNumbers.map(powerOf3));

function powerOf3(value) {
    return value ** 3;
}
console.groupEnd();

// ************************** unshift() *************************
function MyArray() {
    if (!new.target) {
        return new MyArray();
    }

    this.length = 4; 
}

const arrayPrototype = new MyArray();

MyArray.prototype = arrayPrototype;

const arr1 = new MyArray();

arr1[0] = 2;
arr1[1] = 9;
arr1[2] = 4;
arr1[3] = 6;

arrayPrototype.unshift = function(item) {
    for(let i = this.length; i > 0; i--) {
        this[i] = this[i - 1];
    }
    
    this[0] = item;
    return ++this.length;
};