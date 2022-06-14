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
// --------------------------------------------------------------
// расспыление spread(...)


// const numbers = [...[0,5,10],...[1, 2, 3],...[4,5]];
// console.log(numbers)

// поиск самой маленькой или большой температуры
// const temps = [18, 14, 12, 21, 17, 29, 24];
// console.log('max temp: ',Math.max(...temps));
// console.log('min temp: ',Math.min(...temps))

// сшить несколько масивов в один через конкат и spread

// const lastWeekTemps = [1, 2, 3];
// const currentTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

// const allTemps = [...lastWeekTemps,...currentTemps,...nextWeekTemps];
// console.log(allTemps);

// распыление обьектов
// Object.prototype.assign() и spread

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// const c = {};
// Object.assign(c, a, b);

// или так
// const c = {
//     ...a,
//     ...b,
// }


// console.log(c)
// -----------------------------------------------------------------------


// ---------------------------ДЕСТРУКТАРИЗАЦИЯ---------------------
// const playlist = {
    
//     name: 'мой супер плейлист',
//     rating: 5,
//     tracks: ['трек 1', "трек 2", "трек 3"],
//     trackCount: 3

// };
// деструкторизация
// const { name,rating,tracks,trackCount:numberOfTracks,author='user', } = playlist;
//
// console.log(name, rating, tracks,trackCount );

// ---Глубокая деструкторизация---------------------

// const profile = {
//     name: 'Jacques Gluke',
//     tag: 'jgluke',
//     location: 'Ocho Rios, Jamaica',
//     avatar: 'Photo01',
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes:1308,
//     },
// }
// const { name, tag, location, avatar, stats:{followers,views,likes}, } = profile

// console.log(name, tag, location, avatar, followers, views, likes);

// Деструктаризация массивов

// const rgb = [255, 100, 80];
// const [a, b, c] = rgb
// console.log(a,b,c)
// --------------------------------------------------------------------

// Операция Rest(сбор)

// const profile = {
//     name: 'Jacques Gluke',
//     tag: 'jgluke',
//     location: 'Ocho Rios, Jamaica',
//     avatar: 'Photo01',
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes:1308,
//     },
// }
// const { name, tag, location, ...restProps } = profile;
// console.log(name, tag, location);
// console.log(restProps);
// --------------------------------------------------------------------
// const profile = {
//     name: 'Jacques Gluke',
//     tag: 'jgluke',
//     location: 'Ocho Rios, Jamaica',
//     avatar: 'Photo01',
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes:1308,
//     },
// }

// const showProfileInfo = function (userProfile) {
    
//     const {
//         name,
//         tag,
//         location,
//         avatar,
//         stats:{followers,views,likes}
//     } = userProfile
    
//     console.log(name, tag, location, avatar, followers, views, likes);
    
// };

// showProfileInfo(profile);


// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Если это собственное свойство - выполняем тело if
//   if (book.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(book[key]);
//   }

//   // Если это не собственное свойство - ничего не делаем
// }


 