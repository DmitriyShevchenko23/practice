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



