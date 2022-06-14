// for (let i = 50; i <= 100; i += 10) {
//     console.log(i)
// }



// const target = 4;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);

// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// var arr = [1, 2, 3, 4, 5];
// for (var i = 0; i < arr.length; i+=1) {
// 	console.log(arr[i] + '');
// }



// Заполните массив 10-ю иксами с помощью цикла
// const arr = [];
// for (let i = 0; i < 5; i += 1){
//      arr[i]='x'
//     console.log(arr);
// }

//  Если переменная a равна нулю, то выведите 'Верно', иначе выведите 'Неверно'.
// Проверьте работу скрипта при a, равном 1, 0, -3.
// const a = 3;
// if (a = 1) {
//     console.log('true')
// } else {
//     console.log('false')
// }

// // Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'.
// //  Проверьте работу скрипта при a, равном 5, 0, -3, 2
// const a = 3
// if (a > 3 && a < 5) {
//     console.log('true')
// } else {
//     console.log('false')
// }

// Если переменная a равна нулю или равна двум, то прибавьте к ней 7,
// иначе поделите ее на 10.
//  Выведите новое значение переменной на экран.
// проверьте работу скрипта при a, равном 5, 0, -3, 2

// const a = -3;
// if (a === 0 || a === 2) {
//     console.log(a+7)
// } else {
//     console.log(a/10)
// }

// // Если переменная a больше 2-х и меньше 11-ти,
// //  или переменная b больше или равна 6 - ти и меньше 14 - ти,
// //  то выведите 'Верно', в противном случае выведите 'Неверно'.
// const a = 5;
// const b = 7;
// if (a > 2 && a < 11 || b >= 6 && b < 14) {
//     console.log('true')
// } else {
//     console.log('false')
// }

// Переменная num может принимать 4 значения: 1, 2, 3 или 4.
//  Если она имеет значение '1', то в переменную result запишем 'зима',
//  если имеет значение '2' – 'весна' и так далее.
// Решите задачу через switch-case.

// switch (значение) {
//   case значение:
//     инструкции;
//     break;

//   case значение:
//     инструкции;
//     break;

//   default:
//     инструкции;
// }

// const season = 5;
// let result;

// switch (season) {
//     case 1:
//         result = 'зима';
//         break;
//     case 2:
//         result = 'весна';
//         break;
//     case 3:
//         result = 'лето';
//         break;
//     case 4:
//         result = 'осень';
//         break;
//     default:
//         result = 'нет такого сезона';
// }
// console.log(result)

// В переменной day лежит какое-то число из интервала от 1 до 31.
//  Определите в какую декаду месяца попадает это число
// (в первую, вторую или третью).

// const day = 34;
// if (day >= 1 && day <= 10) {
//     console.log('первая декада')
// } else if (day >= 11 && day<= 20) {
//     console.log('вторая декада')
// } else if (day >= 21 && day <= 31) {
//     console.log('третья декада')
// } else {
//     console.log('в месяце не может быть больше 31го дня ')
// }

// const blackListedWord1 = "спам";
// const blackListedWord2 = "распродажа";

// const string1 = 'привет, я спам';
// const string2 = 'привет, я распродажа';
// const string3 = 'привет, ты выиграл лям';

// console.log(string1.includes(blackListedWord1))
// console.log(string1.includes(blackListedWord2))
// console.log(string2.includes(blackListedWord1))
// console.log(string2.includes(blackListedWord2))
// console.log(string3.includes(blackListedWord1))
// console.log(string3.includes(blackListedWord2))


// const string1 = 'я учу javascript!';
// // console.log(string1.length)
// // console.log(string1.slice(2, 5))
// // console.log(string1.slice(6, 16))
// // console.log(string1.indexOf('учу'))
// -------------------------------------------------------------------------------
// Дана переменная str, в которой хранится какой-либо текст.
// Реализуйте обрезание длинного текста по следующему принципу:
// если количество символов этого текста больше заданного в переменной n,
// то в переменную result запишем первые n символов строки str
//  и добавим в конец троеточие '...'.
// В противном случае в переменную result запишем содержимое переменной str.

// const string1 = 'я учу javascript!';
// const maxSymbols = 18;
// let result;

// // if (string1.length > maxSymbols) {
// //     result=string1.slice(0,maxSymbols)+'...'
// // } else {
// //     result=string1
// // }
// // console.log(result)
// result = string1.length > maxSymbols ? string1.slice(0, maxSymbols) + '...' : string1;
// console.log(result)


// Отрефактори код так,
// чтобы в переменную value присваивалось значение переменной incomingValue,
//  * если оно не равно undefined или null.
// В противном случае должно присваиваться значение defaultValue.
//  * Проверь работу скрипта для слепдующих значений переменной incomingValue:
// null, undefined, 0, false.
//  * Используй оператор ?? (nullish coalescing operator).

// const incomingValue = null;
// let defaultValue;
// let value;
// if (incomingValue ?? null ) {
//     value = incomingValue
//     console.log(value)
// } else {
//     console.log(defaultValue);
// }


//Используя конструкцию if..else и prompt,
//напиши код, который будет спрашивать: "Какое официальное название JavaScript?".
//* Если пользователь вводит ECMAScript, то показывай alert со строкой "Верно!",
//в противном случае - "Не знаете? ECMAScript!"

// const answer = prompt("Какое официальное название JavaScript?");

// const rightAnswer= 'ECMAScript';
// if (answer.toLowerCase() === rightAnswer.toLowerCase()) {
//     console.log('Верно!')
// } else if (answer === null) {
//     alert('try again')
// } else {
//     alert('Не знаете? ECMAScript!')
// }



// Напиши скрипт, который выводит в консоль строку "Это положительное число",
//  если в prompt пользователь ввел число больше нуля.
//  * Если был введен ноль, выводи в консоль строку "Это ноль".
//  * Если передали отрицательное число,
//  в консоли должна быть строка "Это отрицательное число".

// const input = prompt('Введи число')
// if (input > 0) {
//     alert('Это положительное число')
// } else if (input === 0) {
//     alert('Это ноль')
// } else if (input < 0) {
//     alert('Это отрицательное число')
// // } else {
// //     alert("Введи число")
// }
// Example 10 - Ввод пользователя и ветвления
//  * Напиши скрипт, который будет спрашивать логин с помощью prompt
//  и логировать результат в консоль браузера.
//  *
//  * Если посетитель вводит "Админ", то prompt запрашивает пароль
//  * Если ничего не введено или нажата клавиша Esc - вывести строку "Отменено"
//  * В противном случае вывести строку "Я вас не знаю"
//  * Пароль проверять так:
//  *
//  * Если введён пароль "Я админ", то вывести строку "Здравствуйте!"
//  * Иначе выводить строку "Неверный пароль"
//  */

// const input = prompt("Login?");
// const rightLogin = "Админ";
// const rightPassword = "Я админ";

// if (input === rightLogin.toLowerCase()) {
//   const password = prompt("Password?");
//   if (password === rightPassword) {
//     console.log("hello");
//   } else {
//     console.log("try again");
//   }
//   // password = rightPassword ? console.log('hello') : console.log('try again');
// } else if (input === null) {
//   alert("Cancel");
// } else {
//   alert("Wrong Login");
// }


// * На основе строки "JavaScript is a pretty good language"
// * Cделать новую строку, где каждое слово начинается с большой буквы,
// * а пробелы удалены.Использовать цикл for.

// const str = "JavaScript is a pretty good language";
// let res = '';
// for (let i = 0; i < str.length; i += 1){
//     // if (str[i] === ' ') {
//     //     res = '';
//     //     continue;
//     // }
//     console.log(i)
// }
// console.log()



// -------------------------МАСИВЫ----------------------------------------

// const clients = ["Mango", "Poly", "Ajax"];
// const lastElementIndex = clients.length - 1;
// clients[[0]]='dima'
// clients[1]='real'
// console.log(clients[0])
// console.log(clients[1])
// console.log(clients[2])
// console.log(clients.length)
// console.log(lastElementIndex)
// console.log(clients[lastElementIndex])

// ------------------FOR...OF...--------------------------------------
// const clients = ["Mango", "Ajax", "Poly"];

// // for (let i = 0; i < clients.length; i += 1){
// //     console.log(clients[i])
// // }

// for (const client of clients) {
//     console.log(client)
// }

// const string = "javascript";

// for (const letters of string) {
//   console.log(letters);
// }

// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message;
// for (const client of clients) {
//     if (client === clientNameToFind) {
//         message = "Клиент с таким именем есть в базе данных!";
//         break;
//     }
//     message='Клиента с таким именем нету в базе данных!'
// }
// console.log(message)

// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message = "Клиента с таким именем нету в базе данных!";

// for (const client of clients) {
//   if (client === clientNameToFind) {
//     message = "Клиент с таким именем есть в базе данных!";
//     break;
//   }
//   // Если не совпадает, то на этой итерации ничего не делаем
// }

// console.log(message); // Клиент с таким именем есть в базе данных!
// --------------------------ПРИСВОЕНИЕ--------------------------------

// const a = ["Mango"];
// // Так как a это массив, в b записывается ссылка на уже существующий
// // массив в памяти. Теперь a и b указывают на один и тот же массив.
// const b = a;
// console.log(a); // ["Mango"]
// console.log(b); // ["Mango"]

// // Изменим массив, добавив еще один элемент, используя указатель из a
// a.push("Poly");
// console.log(a); // ["Mango", "Poly"]

// // b также изменилось, потому что b, как и a,
// // просто содержит ссылку на одно и то же место в памяти
// console.log(b); // ["Mango", "Poly"]

// // Результат повторяется
// b.push("Ajax");
// console.log(a); // ["Mango", "Poly", "Ajax"]
// console.log(b); // ["Mango", "Poly", "Ajax"]

// ----------------------МЕТОДЫ-----------------

// Методы split() и join()
// const name = "Mango";
// console.log(name.split("")); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript это интересно";
// console.log(message.split(" ")); // ["JavaScript", "это", "интересно"]

// // join('')
// const words = ["JavaScript", "это", "интересно"];
// console.log(words.join("")); // "JavaScriptэтоинтересно"
// console.log(words.join(" ")); // "JavaScript это интересно"
// console.log(words.join("-")); // "JavaScript-это-интересно"

// indexOf(value)
// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.indexOf("Poly")); // 2
// console.log(clients.indexOf("Monkong")); // -1

// includes(value)
// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.includes("Poly")); // true
// console.log(clients.includes("Monkong")); // false

// Выносим варианты в массив
// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "cherry";
// // Проверяем наличие элемента
// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// }

// push(),pop()
// const clients = []
// clients.push(1);
// clients.push(2)
// clients.push(3)
// console.log(clients)
// clients.pop(3)
// clients.pop(2)
// clients.pop(1)
// console.log(clients)

// slice()
// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(1, 3)); // ["Ajax", "Poly"]
// console.log(clients.slice(2, 4));
// Если begin и end не указаны, будет создана полная копия исходного массива.
// Если не указан end, копирование будет от start и до конца исходного массива.

// Если значение start отрицательное, а end не указан,
// то будут скопированы последние start элементов

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(-2)); // ["Poly", "Kiwi"]
// console.log(clients.slice(-3));// ['Ajax', 'Poly', 'Kiwi']
// console.log(clients.slice(-1));// ['Kiwi']

//splice()
// Швейцарский нож для работы с массивами,
// если исходный массив нужно изменить.
// Удаляет, добавляет и заменяет элементы в произвольном месте массива.
// const scores = [1, 2, 3, 4, 5];

// // Удаляем три элемента массива, начиная с первого элемента (индекс 0)
// const deletedScores = scores.splice(0, 3);

// // Теперь массив scores содержит два элемента
// console.log(scores); // [4, 5]

// // А массив deletedScores содержит три удаленных элемента
// console.log(deletedScores); // [1, 2, 3]
// Добавление
// const colors = ["red", "green", "blue"];

// colors.splice(2, 0, "purple");
// console.log(colors); // ["red", "green", "purple", "blue"]
// Замена
// const languages = ["C", "C++", "Java", "JavaScript"];

// // Заменяем элемент с индексом 1 на новый
// languages.splice(1, 1, "Python");
// console.log(languages); // ["C", "Python", "Java", "JavaScript"]

// // Заменяем один элемент (с индексом 2) на несколько
// languages.splice(2, 1, "C#", "Swift", "Go");
// console.log(languages); // ["C", "Python", "C#", "Swift", "Go", "JavaScript"]

// concat()
// Объединяет два или более массива в один
// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Monkong", "Singu"];

// const allClientsWithOldFirst = oldClients.concat(newClients);
// console.log(allClientsWithOldFirst); // ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]

// const allClientsWithNewFirst = newClients.concat(oldClients);
// console.log(allClientsWithNewFirst); // ["Monkong", "Singu", "Mango", "Ajax", "Poly", "Kiwi"]

// console.log(oldClients); // ["Mango", "Ajax", "Poly", "Kiwi"]
// console.log(newClients); // ["Monkong", "Singu"]


// Создайте массив arr = ['a', 'b', 'c', 'd']
//  и с его помощью выведите на экран строку 'a+b, c+d'.
// const arr = ['a', 'b', 'c', 'd']
// const arr1 = arr.slice(0, 2).join('+');
// const arr2 = arr.slice(2, 4).join("+");
// const arr3 = `${arr1}, ${arr2}`;
// console.log(arr3)



// Есть массив произвольных чисел:

// var anyNumber = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
// Нужно сделать следующее:

// 1. Вывести значения всех элементов массива и соответствующие им индексы:
// Индексу 0 - соответствует число 42
// Индексу 1 - соответствует число 65
// и т.д...

// 2. Найти и вывести на экран максимальное число массива:
// Максимальное число массива: 70

// 3. Определить индекс максимального числа массива
// (или индексы, если число встречается более одного раза).

// Позиции (индексы) максимального числа в массиве: 6,13

// const anyNumber = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];

// const findLongestWord = "The quick brown fox jumped over the lazy dog"
// const strings = findLongestWord.split(' ')
// console.log(strings)
// let bigestWord = strings[0];
// console.log(bigestWord)
// for (const strings of string) {
//     if (strings > bigestWord) {
//         bigestWord = string;
//     }
// }
// console.log(bigestWord)

// const string = "The quick brown fox jumped over the lazy dog";

// const stringArr = string.split(' ');
// console.log(stringArr)


// // console.log(bigestWord);
// for (let i = 0; i < stringArr.length; i += 1){
//     console.log(stringArr[i].length)
//     let bigestWord = stringArr[0];
    
//     if (stringArr[i].length > bigestWord) {
//         bigestWord = stringArr[i].length;
        
//     }
//    console.log(bigestWord)
        
    
// }


