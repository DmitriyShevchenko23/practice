// const book = {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genges: ['historical prose', 'adventure'],
//     isPublic: true,
//     rating: 8.38,
//     hobbies: ["swiming", "music", "sci-fi"],

//     location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//     },
   
// };
// console.table(book)

// const bookTitle = book.title;
// console.log(bookTitle)
// const bookGenges = book.genges;
// console.log(bookGenges)

// const location = book.location;
// console.log(location);
// const country = book.location.country;
// console.log(country);

// const hobbies = book.hobbies;
// console.log(hobbies);
// const firstHobby = book.hobbies[0];
// console.log(firstHobby);
// const hobbyLenght = book.hobbies.length;
// console.log(hobbyLenght)

// book.rating = 9;
// book.genges.push('drama');

// console.log(book.rating);
// console.log(book.genges);

// book.pageCount = 836;
// book.originalLanguage = 'en';
// book.translation = ['ua', 'ru'];
// console.log(book.pageCount)
// console.log(book.originalLanguage)
// console.log(book.translation)

// --------------Короткие свойства--------------
// const name = "Генри Сибола";
// const age = 25;

// const user = {
//   name,
//   age,
// };

// console.log(user.name); // "Генри Сибола"
// console.log(user.age); // 25

// ---------------Вычисляемые свойства--------------

// const propName = 'name';
// const user = {
//     age: 25,
//     [propName]: 'Генри Сибола',
// };
// console.log(user.name);

// ---------------Методы объекта------------------

// ✅ Логически и синтаксически сгруппированные сущности
// const bookShelf = {
//   books: ["The Last Kingdom", "Dream Guardian"],
//   // Это метод объекта
//   getBooks() {
//     console.log("Этот метод будет возвращать все книги - свойство books");
//   },
// //   Это метод объекта
//   addBook(bookName) {
//     console.log("Этот метод будет добавлять новую книгу в свойство books");
//   },
// };

// // Вызовы методов
// bookShelf.getBooks();
// bookShelf.addBook("Новая книга");

// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
// bookShelf.addBook("The Mist");
// bookShelf.addBook("Dream Guardian");
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
// bookShelf.removeBook("The Mist");
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Dream Guardian']
// ----------------------------------методы-------------------------------------------

// 1 изменить имя
// 2 добавить трек
// 3 изменить рейтинг
// 4 показать количевство треков

// const playlist = {
//     name: 'мой супер плейлист',
//     rating: 5,
//     tracks: ['track 1', 'track 2', 'track 3'],
    
//     changeName(newName) {
//         console.log('this внутри метода(функции) changeName: ', this);
//         this.name = newName;
//     },
//     addTrack(track) {
//         this.tracks.push(track)
//     },
//     updateRating(newRating) {
//         this.rating=newRating
//     },
//     getTrackCount() {
//         return this.tracks.length;
//     },
// };
// playlist.changeName('new name');
// playlist.addTrack('track 4');
// playlist.updateRating(6);
// console.log(playlist.getTrackCount())

// console.log(playlist);

// --------------------Перебор обектов object.keys/values-----------------


// const feedBack = {
//     good: 5,
//     neutral: 10,
//     bad: 3,
// };
// let totalFeedBack = 0;


//  KEYS (если надо что то сделать с ключами)

// // получить ключи(keys)
// const keys = Object.keys(feedBack);
// console.log(keys)

// for (const key of keys) {
//     console.log(key)

//     // получить значения(values)
//     console.log(feedBack[key])
//    // считаем общее количество отзывов
//     totalFeedBack += feedBack[key];

// }
// console.log("общее количество отзывов: ", totalFeedBack)

// -------------------------------------------------------------

// VALUES(если надо что то сделать с значениями)

// const values = Object.values(feedBack);
// console.log(values);

// for (const value of values) {
//     console.log(value);

//     totalFeedBack += value;
// }
// console.log("общее количество отзывов: ", totalFeedBack)


// --------------------Работа с коллекцией (масивом обьектов)-------------------

// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: true },
//     { name: 'Ajax', online: false },
// ];

// console.table(friends);

// for (const friend of friends) {
//     console.log(friend.online);

//     friend.newprop = 555;
// }
// console.table(friends);
// ---------------------------------------------------------------------

// ищем друзей по имени

// const findFriendByName = function (allfriends, friendName) {
//     for (const friend of allfriends) {
//         console.log(friend)
//         console.log(friend.name === friendName)

//         if (friend.name === friendName) {
//             return 'Нашел!'
//         }
//     }
//     return 'Не нашли!'
// }

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));
// -----------------------------------------------------------------------

// Получить имена всех друзей в масив-----------

// const getAllNames = function (allFriends) {

//     const allFriendNames = [];
    
// for (const friend of allFriends) {
//     console.log(friend.name);
//     allFriendNames.push(friend.name);
//     }
//     return allFriendNames;
// }

// console.log(getAllNames(friends))
// ----------------------------------------------------------------------

// получаем именна друзей которые онлайн--------

// const getOnlineFriends = function (allFriends) {
//     const onlineFriends = []
    
//     for (const friend of allFriends) {
//         console.log(friend)
//         console.log(friend.online)

//         if (friend.online) {
//             onlineFriends.push(friend);
//         }

//     }
//     return onlineFriends;
// }
// console.log(getOnlineFriends(friends));
// ------------------------------------------------------------------------

// получаем именна друзей которые оффлайн--------

// const getOfflineFriends = function (allFriends) {
//     const offlinefriends = [];

//     for (const friend of allFriends) {
//         console.log(friend.online);

//         if (!friend.online) {
//             offlinefriends.push(friend);
//         }
//     }

//     return offlinefriends;
// }

// console.log(getOfflineFriends(friends));
// --------------------------------------------------------------------------
//
// const getFriendsByOnlineStatus = function (allFriends) {
//     const friendsByStatus = {
//         online: [],
//         ofline:[]
//     };
// for (const friend of allFriends) {
//     if (friend.online) {
//         friendsByStatus.online.push(friend);
//         continue;
//     }

//     friendsByStatus.ofline.push(friend);
//     }

//     return friendsByStatus;
// }

// console.log(getFriendsByOnlineStatus(friends))

