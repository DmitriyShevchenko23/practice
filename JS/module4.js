// --------------Callback-----------------------------
// const fnA = function (message,callback) {
//     console.log(message)

//     console.log(callback)
//     callback(100)
// }
// const fnB = function (number) {
//     console.log('это вызов fnB',number)
// }

// fnA('qweqwe', fnB)

// ---------------------------------------------------

// const doMath = function (a, b, callback) {
//     const result = callback(a, b);
    
//     console.log(result);
// }
// const add = function (x,y) {
//     return x + y;
// }
// const sub = function (x,y) {
//     return x - y;
// }

// doMath(2, 3, add);
// doMath(10, 8, sub);

// -----------------------------------------------------

// const filter = function (array,test) {
//     const filteredArray = [];

//     for (const el of array) {
//         console.log(el)
//         const passed = test(el);

//         if (passed) {
//         filteredArray.push(el);
//     }
//     }
    
//     return filteredArray;
// };
// ---------------------------------------------------------------
// надо передать функцию
// функция получает элемент масива
// если элемент массимва удовлетворяет условие то функция вернет true
// в обратном случае вернет false

// const callback1 = function (value) {
//     return value >= 3;
// }
// const r1 = filter([1, 2, 3, 4, 5],callback1);
// console.log(r1);

// const callback2 = function (value) {
//     return value <= 4;
// }
// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8],callback2);
// console.log(r2);

// или с помощью Inline Function, вписаной в параметры функции "фильтр" в переменой "r2"
// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], function (value) {
//     return value <= 4;
// });
// console.log(r2);
// -------------------------------------------------------------
// const fruits = [
//     { name: 'apples', quantity: 200, isFresh: true },
//     { name: 'grapes', quantity: 150, isFresh: false },
//     { name: 'bananas', quantity: 100, isFresh: true }
// ];

// const getFruitsWithQuantity = function (fruit) {
//     return fruit.quantity >= 120;
// };

// const r3 = filter(fruits, getFruitsWithQuantity)
// console.log(r3);
// -------------------------------------------------------------
// -------------------Замыкание---------------------------------

// const fnA = function (parametr) {
//     const innerVariable = 'знвчение fnA';

//     const innerFunction = function () {
//         console.log(parametr)
//         console.log(innerVariable)
//         console.log('это вызов innerFunction');
//     }

//     return innerFunction
// };
// const fnB = fnA(555);

// fnB()

// console.log(fnB);



