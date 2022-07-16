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
// ------------------------------------------------------------
// -----------------Переберающие методы масивов------------------

// .forEach перебирает оигинальный массив

// const numbers = [5, 10, 15, 20, 25];
// numbers.forEach(function (number, index, array) {
//     console.log('number', number);
    
// });
// console.log(numbers);
// -----------------------------------------------------------------

// .map() поэлеметно переберает массив
// возвращает такой же длины массив
// не изменяет оригинальный массив

// const numbers = [5, 10, 15, 20, 25];

// const doubledNums = numbers.map(function (number) {
//     console.log(number);
//     return number * 2;
// })
// console.log('numbers', numbers)
// console.log('doubledNums', doubledNums)


// const players = [
//     { id: 'player-1', name: 'Mango', timeplayed: 310, points: 54, online: false },
//     { id: 'player-2', name: 'Poly', timeplayed: 470, points: 92, online: true },
//     { id: 'player-3', name: 'Kiwi', timeplayed: 230, points: 48, online: true },
//     { id: 'player-4', name: 'Ajax', timeplayed: 150, points: 71, online: false },
//     { id: 'player-5', name: 'Chelsy', timeplayed: 80, points: 48, online: true },
// ];
// console.table(players)
// получаем список имен игроков, айди игроков, время игры

// const playersName = players.map(player => player.name);
// console.log('players name: ', playersName);

// const playersId = players.map(playerId => playerId.id)
// console.log('player Id: ', playersId)

// const playersTime = players.map(playerTime => playerTime.timeplayed)
// console.log('time played: ',playersTime)


// Увеличиваем кол-во поинтов каждого игрока 10%

// const updatePlayers = players.map(player => ({
//     ...player,
//     points: player.points * 1.1,}))
// console.table(updatePlayers)

// увеличиваем кол-времени каждого игрока 10%

// const updatedTime = players.map(player => ({
//     ...player,
//     timeplayed: player.timeplayed * 1.1,}));
// console.table(updatedTime)

// const playerToUpdate='player-3'
// const updatePlayers = players.map(player => {
//     if (playerToUpdate === player.id) {
//         return {
//             ...player,
//             timeplayed: player.timeplayed + 100,
//         }
//     }
//     return player;
// });
// const updatePlayers = players.map(player => playerToUpdate === player.id
//     ? { ...player, timeplayed: player.timeplayed + 100 }
//     : player,
// );
// console.table(updatePlayers)


//----------.filter()-----------------------------------
// получить всех игроков онлайн и оффдайн с помощью filter

// const onlinePlayers = players.filter(player => player.online);
// console.table(onlinePlayers);

// const offlinePlayers = players.filter(player => !player.online);
// console.table(offlinePlayers);

// получить всех игроков с временем игры больше 250

// const hardPlayers = players.filter(player => player.timeplayed > 250);
// console.table(hardPlayers);
// --------------------------------------------------------

// -----------------.find()------------------------------
// ищем игрока по ID
// const playerToFind='player-3'
// const playerByid = players.find(player => player.id === playerToFind);
// console.log(playerByid)
// ------------------------------------------------------------
// -------------.reduse()-------------------------------

// const numbers = [5, 10, 15, 20, 25];

// const total = numbers.reduce((acc, number) => {
//     console.log('number', number);
//     console.log('acc', acc);
//     return acc + number
// }, 0);
// console.log(total);

// accumulator = 0 -> number = 5 -> return 0 + 5;
// accumulator = 5 -> number = 10 -> return 5 + 10;
// accumulator = 15 -> number = 15 -> return 15 + 15;
// accumulator = 30 -> number = 20 -> return 30 + 20;
// accumulator = 50 -> number = 25 -> return 50 + 25;

// Считаем общую зарплату

// const salary = {
//     mango: 100,
//     poly: 50,
//     ajax: 150,
// };

// const totalSalary = Object.values(salary).reduce((total, value) =>{
//     return total + value
// }, 0);
// const totalSalary = Object.values(salary).reduce(
//     (total, value) => total + value,
//     0,
// );
// console.log(totalSalary);

// const totalTimePlayed = players.reduce(
//     (totalTime, player) => totalTime + player.timeplayed,
//     0,);
// console.log(totalTimePlayed)



const users=[
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];
// const allScills = users.flatMap(user => user.skills);
// console.log(allScills);

// const uniqSkills = allScills.filter((skills, index, array) =>
//     array.indexOf(skills) === index);
// console.log(uniqSkills)

// const allFriends = users.flatMap(user => user.friends)
//     .filter((friends, index, array) =>
//     array.indexOf(friends) === index);
// console.log(allFriends);

// const totalBalance = users.reduce((total, user) => {
//   total + user.balance
// }, 0)
// console.log(totalBalance)
const TotalFriendCount = users.reduce((total, user) => {
  total + user.friends.length
}, 0)
console.log(TotalFriendCount)
