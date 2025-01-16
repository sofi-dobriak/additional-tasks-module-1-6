"use strict";

/*1. Об'єкти та Масиви
Задача 1: Створення профілю користувача
Твоя задача — створити об'єкт, який буде містити профіль користувача на сайті. Профіль має включати:

name (ім'я користувача),
email (адреса електронної пошти),
age (вік),
address (адреса), яке включає street, city, zip.
Після створення об'єкта, додай метод, який виводить всю інформацію про користувача в консоль. Потім створити масив з кількома користувачами та реалізувати функцію, яка виводить користувачів, старших за 25 років.*/

class User {
    constructor(name, email, age, address) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.address = address;
    }

    getInfo() {
        console.log(`Name: ${this.name}.
        Email: ${this.email}.
        Age: ${this.age}.
        Address: ${this.address.street}, ${this.address.city}, ${this.address.zip}`);
    }
}

const users = [
    new User("Alex", "alex@gmail.com", 35, {
        street: "Green St",
        city: "Boston",
        zip: "02134",
    }),

    new User("Lara", "lara@gmail.com", 22, {
        street: "Lake Rd",
        city: "Chicago",
        zip: "60616",
    }),

    new User("Mila", "mila@gmail.com", 30, {
        street: "Hill Ave",
        city: "San Francisco",
        zip: "94110",
    }),
];

const getUserOldestThan = (users, userAge) => {
    return users.filter((user) => user.age > userAge);
};

const printAllUsers = (users) => {
    users.forEach((user) => user.getInfo());
};

const oldestUsers = getUserOldestThan(users, 34);
// printAllUsers(oldestUsers);

//!========================================================================================================

/*2. Функції
Задача 2: Створення калькулятора
Напиши функції для обчислення базових арифметичних операцій:

add (додавання),
subtract (віднімання),
multiply (множення),
divide (ділення).
Функція повинна приймати два числа та операцію (наприклад, "+", "-", "*", "/") і повертати результат.

Реалізуй додатково метод, який перевіряє, чи є ділення на нуль і повідомляє про це.*/

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (b === 0 ? "Ділення на нуль неможливе!" : a / b);

function calculate(a, b, operator) {
    switch (operator) {
        case "+":
            return add(a, b);
            break;
        case "-":
            return subtract(a, b);
            break;
        case "*":
            return multiply(a, b);
            break;
        case "/":
            return divide(a, b);
            break;
        default:
            return "Невідомий оператор";
    }
}

// console.log(calculate(10, 5, "+"));
// console.log(calculate(10, 5, "-"));
// console.log(calculate(10, 5, "*"));
// console.log(calculate(10, 0, "/"));

//!========================================================================================================

/*3. Умовні конструкції
Задача 3: Визначення типу автомобіля
Уяви, що ти працюєш на сайті для порівняння автомобілів. Твоя задача — створити функцію, яка приймає рік випуску автомобіля і повертає:

"новий", якщо рік випуску не більше 5 років від поточного.
"середній", якщо рік випуску між 6 і 10 роками тому.
"старий", якщо рік випуску старший за 10 років.
Також додай повідомлення, якщо автомобіль — класичний (старше 20 років).*/

function checkCarYear(carYear) {
    if (carYear <= 5) {
        console.log("новий");
    } else if (carYear >= 6 && carYear <= 10) {
        console.log("середній");
    } else if (carYear > 20) {
        console.log("класичний");
    } else {
        console.log("старий");
    }
}
// checkCarYear(4);
// checkCarYear(8);
// checkCarYear(12);
// checkCarYear(22);

//!========================================================================================================

/*4. Цикли та Масиви
Задача 4: Пошук найбільшого та найменшого числа
У тебе є масив чисел. Твоя задача — написати функцію, яка знаходить найбільше та найменше число в масиві.

Після цього вивести повідомлення, яке показує:

Найбільше число та його індекс у масиві.
Найменше число та його індекс у масиві.*/

const array1 = [5, 3, 12, 46, 7, 5, 3, 6, 8, 9, 2, 5, 17];
const array2 = [];
const array3 = [5, 2, 3, 12, 46, 7, 5, 3, 6, 8, 9, 2, 46, 5, 17];

const getBiggestNumber = (array) => Math.max(...array);
const getSmallestNumber = (array) => Math.min(...array);

const getInfo = (array) => {
    if (array.length === 0) {
        console.log("Масив порожній!");
        return;
    }

    const bigNumber = getBiggestNumber(array);
    const smallNumber = getSmallestNumber(array);

    const bigIndex = array
        .map((number, index) => (number === bigNumber ? index : -1))
        .filter((index) => index !== -1);

    const smallIndex = array
        .map((number, index) => (number === smallNumber ? index : -1))
        .filter((index) => index !== -1);

    console.log(`Biggest number: ${bigNumber} with index ${bigIndex}`);
    console.log(`Smallest number: ${smallNumber} with index ${smallIndex}`);
};

// getInfo(array1);
// getInfo(array2);
// getInfo(array3);

//!========================================================================================================

/*5. Об'єкти та Методи
Задача 5: Клас "Автомобіль"
Створи клас Car, який має наступні властивості:

brand (бренд),
model (модель),
year (рік випуску),
price (ціна).
У класі має бути метод getOldestCar(), який порівнює два автомобілі за роком випуску та виводить, який автомобіль старший.*/

class Car {
    constructor(brand, model, year, price) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.price = price;
    }

    getOldestCar(car) {
        if (this.year > car.year) {
            console.log(
                `Автомобіль ${this.brand} ${this.model} новіший за автомобіль ${car.brand} ${car.model}`
            );
        } else if (this.year < car.year) {
            console.log(
                `Автомобіль ${car.brand} ${car.model} новіший за автомобіль ${this.brand} ${this.model}`
            );
        } else {
            console.log("Автомобілі одного року випуску");
        }
    }
}

const car1 = new Car("Toyota", "Corolla", 2005, 5000);
const car2 = new Car("Honda", "Civic", 2008, 7000);
const car3 = new Car("BMW", "M5", 2014, 7000);
const car4 = new Car("Mazda", "Cruella", 2018, 7000);

// car1.getOldestCar(car2);
// car2.getOldestCar(car1);
// car3.getOldestCar(car1);

//!========================================================================================================

/*1. Клас "Інтернет-магазин"
Задача:
Розробити клас Product, який має властивості:

name (назва продукту),
category (категорія продукту),
price (ціна продукту),
inStock (кількість на складі).

Додати методи:

sell(quantity) — зменшує кількість на складі, якщо товар є в наявності, і виводить відповідне повідомлення.
restock(quantity) — додає товар на склад.
discount(percentage) — знижує ціну на заданий відсоток.

Додаткове завдання:

Реалізувати клас Store, який має масив продуктів і методи:
addProduct(product) — додає новий продукт до магазину,
searchByCategory(category) — повертає всі товари певної категорії. */

class Product {
    constructor(name, category, price, inStock) {
        this.name = name;
        this.category = category;
        this.price = price;
        this.inStock = inStock;
    }
    sell(quantity) {
        if (quantity > this.inStock) {
            console.log(`Недостатньо товарів ${this.name} на складі`);
        }

        this.inStock -= quantity;
        console.log(`На складі ${this.inStock} одиниць товару ${this.name}`);
    }

    restock(quantity) {
        this.inStock += quantity;
        console.log(`На складі ${this.inStock} одиниць товару ${this.name}`);
    }

    discount(percentage) {
        if (percentage < 0 || percentage > 100) {
            console.log("Відсоток знижки має бути в діапазоні від 0 до 100");
            return;
        }

        const originalPrice = this.price;
        const priceWithDiscount = this.price - this.price * (percentage / 100);

        console.log(`Початкова ціна ${this.name} становить: ${originalPrice}$`);
        console.log(`Ціна ${this.name} зі знижкою становить ${priceWithDiscount}$`);
    }
}

class Store {
    constructor() {
        this.productList = [];
    }

    addProduct(product) {
        this.productList.push(product);
    }

    searchByCategory(category) {
        const results = this.productList.filter((product) => product.category === category);

        if (results.length === 0) {
            console.log(`На складі немає товарів ${this.name}`);
        }

        return `Товари з категорії ${category}:`, results;
    }

    getList() {
        return this.productList;
    }
}

const product1 = new Product("Laptop", "Electronics", 1000, 10);
const product2 = new Product("Sofa", "Furniture", 500, 5);
const product3 = new Product("Headphones", "Electronics", 150, 20);
const product4 = new Product("Bed", "Furniture", 700, 3);
const product5 = new Product("Smartphone", "Electronics", 800, 15);

const store = new Store();

store.addProduct(product1);
store.addProduct(product2);
store.addProduct(product3);
store.addProduct(product4);
store.addProduct(product5);

// console.table(store.getList());

const electronics = store.searchByCategory("Electronics");

// console.log("Товари з категорії Electronics:", electronics);

// product1.sell(2);
// product2.restock(10);
// product1.discount(10);

//!========================================================================================================

/*2. Система обліку студентів
Задача:
Розробити клас Student, який містить:

name (ім'я студента),
group (група студента),
grades (масив оцінок студента).

Додати методи:

addGrade(grade) — додає нову оцінку.
getAverageGrade() — повертає середній бал.

Додаткове завдання:
Створити клас Group, який містить список студентів і методи:

addStudent(student) — додає студента до групи.
getBestStudent() — повертає студента з найвищим середнім балом. */

class Student {
    constructor(name, group, grades = []) {
        this.name = name;
        this.group = group;
        this.grades = grades;
    }

    addGrade(grade) {
        this.grades.push(grade);
    }

    getAverageGrade() {
        const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
        return +(sum / this.grades.length).toFixed(1);
    }
}

class Group {
    constructor() {
        this.studentsList = [];
    }

    addStudent(student) {
        this.studentsList.push(student);
    }

    getBestStudent() {
        return this.studentsList.toSorted((a, b) => b.getAverageGrade() - a.getAverageGrade())[0];
    }
}

// Створюємо студентів
const student1 = new Student("Олексій", "Група 1", [5, 4, 5, 3, 4]);
const student2 = new Student("Ірина", "Група 1", [4, 4, 3, 5, 4]);
const student3 = new Student("Максим", "Група 2", [5, 5, 5, 5, 5]);
const student4 = new Student("Софія", "Група 2", [3, 3, 4, 4, 3]);
const student5 = new Student("Олена", "Група 1", [4, 5, 4, 4, 5]);

// Створюємо групи
const group1 = new Group();
const group2 = new Group();

// Додаємо студентів до груп
group1.addStudent(student1);
group1.addStudent(student2);
group1.addStudent(student5);

group2.addStudent(student3);
group2.addStudent(student4);

// Тестуємо методи
// console.log("Середній бал Олексія: ", student1.getAverageGrade()); // середній бал
// console.log("Найкращий студент у групі 1: ", group1.getBestStudent().name); // найкращий студент

// Додаємо нову оцінку студенту
student1.addGrade(5);
// console.log("Нова середня оцінка Олексія: ", student1.getAverageGrade());

// Тестуємо на іншій групі
// console.log("Найкращий студент у групі 2: ", group2.getBestStudent().name);

//!========================================================================================================

/*3. Система бронювання готелів
Задача:
Розробити клас Room, який має властивості:

number (номер кімнати),
type (тип кімнати — одномісна, двомісна),
isAvailable (доступність кімнати).

Додати методи:

book() — бронює кімнату, якщо вона доступна, та змінює її статус.
release() — звільняє кімнату.

Додаткове завдання:
Створити клас Hotel, який має список кімнат і методи:

addRoom(room) — додає кімнату в готель.
searchAvailableRooms(type) — повертає всі доступні кімнати певного типу. */

class Room {
    constructor(number, type, isAvailable) {
        this.number = number;
        this.type = type;
        this.isAvailable = isAvailable;
    }

    book() {
        if (!this.isAvailable) {
            console.log(`Кімната ${this.number} вже заброньована`);
        } else {
            this.isAvailable = false;
            console.log(`Кімната ${this.number} забронювана`);
        }
    }

    release() {
        this.isAvailable = true;
        console.log(`Кімната ${this.number} звільнена`);
    }
}

class Hotel {
    constructor() {
        this.roomsList = [];
    }

    addRoom(room) {
        this.roomsList.push(room);
    }

    searchAvailableRooms(type) {
        const result = this.roomsList.filter((room) => room.type === type);

        if (result.length === 0) {
            console.log(`У готелі немає номерів типу ${type}`);
        }

        console.log(`Кімнати типу ${type}:`, result);
        return result;
    }

    getRooms() {
        return this.roomsList;
    }
}

const room1 = new Room("101", "одномісна", true);
const room2 = new Room("102", "двомісна", false);
const room3 = new Room("103", "одномісна", true);
const room4 = new Room("104", "двомісна", false);
const room5 = new Room("105", "одномісна", true);

const hotel = new Hotel();

hotel.addRoom(room1);
hotel.addRoom(room2);
hotel.addRoom(room3);
hotel.addRoom(room4);
hotel.addRoom(room5);

// console.table(hotel.getRooms());

// console.table(hotel.searchAvailableRooms("одномісна"));
// console.table(hotel.searchAvailableRooms("двомісна"));

// room1.book();
// room1.book();
// room1.release();

//!========================================================================================================

/*4. Управління завданнями
Задача:
Розробити клас Task, який має:

title (назва завдання),
description (опис завдання),
isCompleted (статус виконання).

Додати методи:

markAsCompleted() — змінює статус завдання на виконане.
updateDescription(newDescription) — оновлює опис завдання.

Додаткове завдання:
Створити клас TaskManager, який зберігає список завдань і має методи:

addTask(task) — додає нове завдання.
getPendingTasks() — повертає список невиконаних завдань.
getCompletedTasks() — повертає список виконаних завдань. */

class Task {
    constructor(title, description) {
        this.title = title;
        this.description - description;
        this.isCompleted = false;
    }

    markAsCompleted() {
        if (this.isCompleted) {
            console.log(`Завдання '${this.title}' вже завершено`);
        } else {
            this.isCompleted = true;
            console.log(`Завдання "${this.title}" виконано.`);
        }
    }

    updateDescription(newDescription) {
        this.description = newDescription;
        console.log(`Завадння ${this.title} оновлено`);
    }
}

class TaskManager {
    constructor() {
        this.taskList = [];
    }

    addTask(task) {
        this.taskList.push(task);
    }

    getPendingTasks() {
        const result = this.taskList.filter((task) => !task.isCompleted);

        if (result.length === 0) {
            console.log("Немає невиконаних завдань");
        }

        return result;
    }

    getCompletedTasks() {
        const result = this.taskList.filter((task) => task.isCompleted);

        if (result.length === 0) {
            console.log("Немає виконаних завдань");
        }

        return result;
    }

    getAllTasks() {
        return this.taskList;
    }
}

const task1 = new Task("Вивчити JavaScript", "Прочитати главу про функції.");
const task2 = new Task("Купити продукти", "Купити хліб, молоко, яйця.");
const task3 = new Task("Прибрати в кімнаті", "Зробити прибирання в кімнаті.");
const task4 = new Task("Подивитися фільм", "Новий фільм на Netflix.");
const task5 = new Task("Написати лист", "Написати лист другові.");

const taskManager = new TaskManager();

taskManager.addTask(task1);
taskManager.addTask(task2);
taskManager.addTask(task3);
taskManager.addTask(task4);
taskManager.addTask(task5);

// task1.markAsCompleted();
// task1.markAsCompleted();
// task2.markAsCompleted();
// task3.markAsCompleted();
// task4.markAsCompleted();
// task5.markAsCompleted();

// console.table(taskManager.getAllTasks());

// console.table(taskManager.getCompletedTasks());
// console.table(taskManager.getPendingTasks());

//!========================================================================================================

/*
5. Електронна бібліотека
Задача:
Розробити клас Book, який має властивості:

title (назва книги),
author (автор),
year (рік видання),
isAvailable (чи доступна книга).

Додати методи:

borrow() — знімає книгу з доступності.
returnBook() — повертає книгу у доступність.

Додаткове завдання:
Створити клас Library, який має масив книг і методи:

addBook(book) — додає книгу до бібліотеки.
searchByAuthor(author) — повертає всі книги певного автора.
listAvailableBooks() — повертає список доступних книг. */

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.isAvailable = true;
    }

    borrow() {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log(`Книга ${this.title} заброньована`);
        } else {
            console.log(`Книга ${this.title} вже заброньована.`);
        }
    }

    returnBook() {
        if (!this.isAvailable) {
            this.isAvailable = true;
            console.log(`Книга ${this.title} повернута`);
        } else {
            console.log(`Книга ${this.title} вже доступна`);
        }
    }
}

class Library {
    constructor() {
        this.bookList = [];
    }

    addBook(book) {
        this.bookList.push(book);
    }

    searchByAuthor(author) {
        const result = this.bookList.filter((book) => book.author === author);

        if (result.length === 0) {
            console.log(`Немає книг автора ${author}`);
            return [];
        }

        return result;
    }

    listAvailableBooks() {
        const result = this.bookList.filter((book) => book.isAvailable);

        if (result.length === 0) {
            console.log("Немає доступних книг");
            return [];
        }

        return result;
    }

    getAllBooks() {
        return this.bookList;
    }
}

// Створення книг
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
const book2 = new Book("1984", "George Orwell", 1949);
const book3 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
const book4 = new Book("The Catcher in the Rye", "J.D. Salinger", 1951);
const book5 = new Book("Pride and Prejudice", "Jane Austen", 1813);

// Створення бібліотеки
const library = new Library();

// Додавання книг до бібліотеки
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);

// Перевірка всіх книг в бібліотеці
// console.log("Усі книги в бібліотеці:");
// console.table(library.getAllBooks());

// Тестування borrow()
// console.log("\nБронювання книг:");
// book1.borrow(); // Бронювання першої книги
// book2.borrow(); // Бронювання другої книги

// Перевірка доступних книг після бронювання
// console.log("\nДоступні книги після бронювання:");
// console.table(library.listAvailableBooks());

// Тестування повернення книг
// console.log("\nПовернення книг:");
// book1.returnBook(); // Повернення першої книги
// book2.returnBook(); // Повернення другої книги

// Перевірка доступних книг після повернення
// console.log("\nДоступні книги після повернення:");
// console.table(library.listAvailableBooks());

// Тестування пошуку книг за автором
// console.log("\nПошук книг за автором 'George Orwell':");
// console.table(library.searchByAuthor("George Orwell"));

// Тестування пошуку книг за автором, якого немає
// console.log("\nПошук книг за автором 'J.K. Rowling':");
// console.table(library.searchByAuthor("J.K. Rowling"));

//!========================================================================================================

/*1. Система обліку замовлень (Order Management System)
Задача: Розробити клас Order, який має такі властивості:

orderId (ідентифікатор замовлення),
customerName (ім'я клієнта),
items (масив з предметами замовлення),
totalAmount (загальна сума замовлення).

Додати методи:

addItem(item, price) — додає предмет до замовлення.
removeItem(item) — видаляє предмет з замовлення.
calculateTotal() — обчислює загальну суму замовлення.

Додаткове завдання: Створити клас OrderManager, який має масив замовлень та методи:

addOrder(order) — додає нове замовлення.
getOrderById(orderId) — знаходить замовлення за ідентифікатором. */

class Order {
    constructor(orderId, customerName) {
        this.orderId = orderId;
        this.customerName = customerName;
        this.items = [];
    }

    addItem(item, price) {
        this.items.push({ item, price });
        console.log(`Додано: ${item} за ціною ${price} грн`);
    }

    removeItem(itemName) {
        const initialLength = this.items.length;
        this.items = this.items.filter((item) => item.item !== itemName);

        if (this.items.length < initialLength) {
            console.log(`Видалено: ${itemName}`);
        } else {
            console.log(`Предмет '${itemName}' не знайдено у замовленні`);
        }
    }

    calculateTotal() {
        return this.items.reduce((acc, item) => acc + item.price, 0);
    }
}

class OrderManager {
    constructor() {
        this.ordersList = [];
    }

    addOrder(order) {
        this.ordersList.push(order);
        console.log(`Замовлення #${order.orderId} додано.`);
    }

    getOrderById(orderId) {
        const order = this.ordersList.find((order) => order.orderId === orderId);

        if (!order) {
            console.log(`Замовлення з ID ${orderId} не знайдено`);
            return null;
        }

        return order;
    }
}

// const order1 = new Order(1, "Софія");
// order1.addItem("Ноутбук", 30000);
// order1.addItem("Мишка", 1000);
// order1.addItem("Клавіатура", 2500);

// console.log(`Загальна сума замовлення: ${order1.calculateTotal()} грн`);

// order1.removeItem("Мишка");
// console.log(`Після видалення загальна сума: ${order1.calculateTotal()} грн`);

// const manager = new OrderManager();
// manager.addOrder(order1);

// const foundOrder = manager.getOrderById(1);
// if (foundOrder) {
//     console.log(`Знайдено замовлення: ${foundOrder.customerName}`);
// }

//!========================================================================================================

/*
2. Система реєстрації на події (Event Registration System)
Задача: Розробити клас Event, який має такі властивості:

eventName (назва події),
eventDate (дата події),
attendees (масив з учасниками),
maxAttendees (максимальна кількість учасників).

Додати методи:

registerAttendee(name) — реєструє учасника на подію (якщо є місце).
cancelRegistration(name) — скасовує реєстрацію учасника.

Додаткове завдання: Створити клас EventManager, який має методи:

createEvent(event) — створює подію.
getEventByName(eventName) — знаходить подію за назвою. */

class Event {
    constructor(eventName, eventDate, maxAttendees) {
        this.eventName = eventName;
        this.eventDate = eventDate;
        this.attendees = [];
        this.maxAttendees = maxAttendees;
    }

    registerAttendee(name) {
        if (this.attendees.includes(name)) {
            console.log(`Учасник ${name} вже зареєстрований на подію ${this.eventName}`);
        } else if (this.attendees.length < this.maxAttendees) {
            this.attendees.push(name);
            console.log(`Учасника ${name} зареєстровано на подію ${this.eventName}`);
        } else {
            console.log(`Усі місця на подію ${this.eventName} заброньовано`);
        }
    }

    cancelRegistration(name) {
        const initialLength = this.attendees.length;
        this.attendees = this.attendees.filter((user) => user !== name);

        if (this.attendees.length < initialLength) {
            console.log(`Реєстрацію учасника ${name} скасовано`);
        } else {
            console.log(`Учасника з ім'ям ${name} не було знайдено`);
        }
    }
}

class EventManager {
    constructor() {
        this.eventsList = [];
    }

    createEvent(event) {
        const isDuplicate = this.eventsList.some((e) => e.eventName === event.eventName);

        if (isDuplicate) {
            console.log(`Подія з назвою "${event.eventName}" вже існує.`);
            return;
        }

        this.eventsList.push(event);
        console.log(`Подію "${event.eventName}" успішно створено.`);
    }

    getEventByName(eventName) {
        const foundEvent = this.eventsList.find((event) => event.eventName === eventName);

        if (!foundEvent) {
            console.log(`Подію ${eventName} не знайдено`);
        } else {
            console.log(`Назва події: ${foundEvent.eventName}`);
            console.log(`Дата події: ${foundEvent.eventDate}`);
            return foundEvent;
        }
    }
}

const event1 = new Event("JS Workshop", "2025-02-10", 3);
const event2 = new Event("React Conference", "2025-03-15", 5);
const event3 = new Event("Node.js Meetup", "2025-04-20", 2);

// Створення EventManager
// const manager = new EventManager();

// Додавання подій
// manager.createEvent(event1);
// manager.createEvent(event2);
// manager.createEvent(event3);

// Спроба створити подію з уже існуючою назвою
// manager.createEvent(new Event("JS Workshop", "2025-05-01", 10));

// Перевірка списку подій
// console.table(manager.eventsList);

// Реєстрація учасників на події
// event1.registerAttendee("Alice");
// event1.registerAttendee("Bob");
// event1.registerAttendee("Charlie");

// Спроба зареєструвати ще одного учасника, коли місць немає
// event1.registerAttendee("Diana");

// Скасування реєстрації
// event1.cancelRegistration("Alice");
// event1.cancelRegistration("Eve"); // Учасник не зареєстрований

// Повторна реєстрація після скасування
// event1.registerAttendee("Diana");

// Пошук події за назвою
// manager.getEventByName("React Conference");
// manager.getEventByName("Vue.js Summit"); // Подія не існує

// Виведення фінального стану подій
// console.table(manager.eventsList);

//!========================================================================================================

/*3. Кошик покупок (Shopping Cart)
Задача: Розробити клас Product, який має такі властивості:

name (назва товару),
price (ціна товару),
quantity (кількість товару в кошику).

Додати методи:

updateQuantity(quantity) — оновлює кількість товару.
getTotalPrice() — обчислює загальну ціну товару в кошику.

Створити клас ShoppingCart, який має масив товарів та методи:

addProduct(product) — додає товар у кошик.
removeProduct(productName) — видаляє товар з кошика.
calculateTotal() — обчислює загальну суму покупок. */

class myProduct {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    updateQuantity(quantity) {
        this.quantity += quantity;
        console.log(`Кількість товару у кошику успішно оновлено`);
    }

    getTotalPrice() {
        const totalProductPrice = this.price * this.quantity;
        console.log(`Загальна вартістю товару ${this.name} складає ${totalProductPrice} грн`);
    }
}

class ShoppingCart {
    constructor() {
        this.productsList = [];
    }

    addProduct(product) {
        const foundProduct = this.productsList.find((p) => p.name === product.name);

        if (foundProduct) {
            foundProduct.quantity += product.quantity;
            console.log(`Кількість товару ${product.name} оновлено`);
        } else {
            this.productsList.push(product);
            console.log(`Товар ${product.name} додано до кошику`);
        }
    }

    removeProduct(productName) {
        const initialLength = this.productsList.length;
        this.productsList = this.productsList.filter((product) => product.name !== productName);

        if (this.productsList.length < initialLength) {
            console.log(`Товар ${productName} видалено`);
        } else {
            console.log(`Товару з назвою ${productName} не існує`);
        }
    }

    calculateTotal() {
        const totalPrice = this.productsList.reduce(
            (acc, product) => acc + product.price * product.quantity,
            0
        );
        console.log(`Загальна сума товарів становить ${totalPrice} грн`);
        return totalPrice;
    }

    getProductsList() {
        return this.productsList;
    }
}

//Створюємо продукти
// const myProduct1 = new myProduct("Milk", 10, 2);
// const myProduct2 = new myProduct("Chokolate", 15, 1);
// const myProduct3 = new myProduct("Sugar", 30, 1);
//
//Створюємо наш кошик
// const myShoppingCart = new ShoppingCart();
//
//Додаємо товари до кошику
// myShoppingCart.addProduct(myProduct1);
// myShoppingCart.addProduct(myProduct2);
// myShoppingCart.addProduct(myProduct3);
//
//Додаємо ще раз товар до кошику, який там вже є (збільшуємо кількість)
// myShoppingCart.addProduct(myProduct3);
//
// console.table(myShoppingCart.getProductsList());
//
//Визначаємо вартість окремого продукту
// myProduct1.getTotalPrice();
// myProduct2.getTotalPrice();
//
// myShoppingCart.calculateTotal();
//
//Видаляємо товар з кошику
// myShoppingCart.removeProduct("Chokolate");
//
// console.table(myShoppingCart.getProductsList());
// myShoppingCart.calculateTotal();

//!========================================================================================================

/*4. Система керування працівниками (Employee Management System)
Задача: Розробити клас Employee, який має такі властивості:

name (ім'я працівника),
position (посада),
salary (зарплата),
isActive (статус працівника).

Додати методи:

promote(newPosition, newSalary) — підвищує працівника.
deactivate() — деактивує працівника.

Створити клас Company, який має масив працівників та методи:

addEmployee(employee) — додає працівника в компанію.
getEmployeesByPosition(position) — повертає всіх працівників на певній посаді. */

class Employee {
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
        this.isActive = true;
    }

    promote(newPosition, newSalary) {
        if (!this.isActive) {
            console.log(`Працівника ${this.name} немає в базі даних`);
        } else {
            console.log(
                `Працівника ${this.name} підвищено з посади ${this.position} із оплатою ${this.salary} грн`
            );

            this.position = newPosition;
            this.salary = newSalary;
            console.log(`Нова посада: ${this.position}, нова зарплата: ${this.salary} грн`);
        }
    }

    deactivate() {
        this.isActive = false;
        console.log(`Працівника ${this.name} звільнено`);
    }
}

class Company {
    constructor() {
        this.employeesList = [];
    }

    addEmployee(employee) {
        if (!employee.isActive) {
            console.log(`Працівника ${employee.name} було звільнено`);
            return;
        }

        this.employeesList.push(employee);
        console.log(`Працівника ${employee.name} успішно додано до компанії`);
    }

    getEmployeesByPosition(position) {
        const employees = this.employeesList.filter((employee) => employee.position === position);
        console.log(`Кількість працівників на посаді ${position}: ${employees.length}`);
        return employees;
    }

    getAllEmployees() {
        return this.employeesList;
    }
}

// // Створюємо працівників
// const employee1 = new Employee("Іван Петров", "Менеджер", 25000);
// const employee2 = new Employee("Оля Сидорова", "Рекрутер", 20000);
// const employee3 = new Employee("Петро Василенко", "Менеджер", 22000);
// const employee4 = new Employee("Марина Іванова", "Директор", 45000);

// // Створюємо компанію
// const company = new Company();

// // Додаємо працівників до компанії
// company.addEmployee(employee1);
// company.addEmployee(employee2);
// company.addEmployee(employee3);
// company.addEmployee(employee4);

// // Виводимо працівників на посаді "Менеджер"
// console.log("Працівники на посаді 'Менеджер':");
// console.table(company.getEmployeesByPosition("Менеджер"));

// // Підвищуємо працівника на посаді
// employee1.promote("Старший Менеджер", 30000);

// // Деактивуємо працівника
// employee2.deactivate();

// // Перевіряємо оновлений список працівників
// console.log("Оновлений список працівників:");
// console.table(company.getEmployeesByPosition("Менеджер"));
// console.table(company.getEmployeesByPosition("Рекрутер"));

// console.table(company.getAllEmployees());

//!========================================================================================================

/*5. Система бронювання квитків (Ticket Booking System)
Задача: Розробити клас Ticket, який має такі властивості:

ticketId (ідентифікатор квитка),
eventName (назва події),
price (ціна квитка),
isBooked (статус бронювання).

Додати методи:

bookTicket() — бронює квиток.
cancelTicket() — скасовує бронювання.

Створити клас TicketBookingSystem, який має масив квитків та методи:

addTicket(ticket) — додає квиток.
getAvailableTickets() — повертає всі доступні квитки. */

class Ticket {
    constructor(ticketId, eventName, price) {
        this.ticketId = ticketId;
        this.eventName = eventName;
        this.price = price;
        this.isBooked = false;
    }

    bookTicket() {
        if (this.isBooked) {
            console.log(`Квиток ${this.ticketId} на подію "${this.eventName}" вже заброньовано.`);
            return;
        }

        this.isBooked = true;
        console.log(`Квиток ${this.ticketId} на подію ${this.eventName} успішно заброньовано.`);
    }

    cancelTicket() {
        if (this.isBooked) {
            this.isBooked = false;
            console.log(
                `Бронювання квитка ${this.ticketId} на подію "${this.eventName}" успішно скасовано.`
            );
        }
    }
}

class TicketBookingSystem {
    constructor() {
        this.ticketsList = [];
    }

    addTicket(ticket) {
        this.ticketsList.push(ticket);
        console.log(`Квиток на подію ${ticket.eventName} успішно додано.`);
    }

    getAvailableTickets() {
        const availableTickets = this.ticketsList.filter((ticket) => !ticket.isBooked);
        console.log(`Кількість доступних квитків: ${availableTickets.length}`);
        return availableTickets;
    }
}

// // Створюємо квитки
// const ticket1 = new Ticket(1, "Концерт Imagine Dragons", 500);
// const ticket2 = new Ticket(2, "Театр 'Ляльковий театр'", 200);
// const ticket3 = new Ticket(3, "Концерт Coldplay", 600);

// // Створюємо систему бронювання квитків
// const bookingSystem = new TicketBookingSystem();

// // Додаємо квитки до системи
// bookingSystem.addTicket(ticket1);
// bookingSystem.addTicket(ticket2);
// bookingSystem.addTicket(ticket3);

// // Бронюємо кілька квитків
// ticket1.bookTicket();
// ticket3.bookTicket();

// // Перевіряємо доступні квитки
// console.table(bookingSystem.getAvailableTickets());

// // Скасовуємо бронювання
// ticket1.cancelTicket();

// // Перевіряємо доступні квитки після скасування
// console.table(bookingSystem.getAvailableTickets());
