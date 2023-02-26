// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let a = 'hello world'
// let b = 'lorem ipsum'
// let c = 'javascript is cool'
// console.log(a,a.length);
// console.log(b,b.length);
// console.log(c,c.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let a = 'hello world'
// let b = 'lorem ipsum'
// let c = 'javascript is cool'
//
// console.log(a,'-',a.toUpperCase());
// console.log(b,'-',b.toUpperCase());
// console.log(c,'-',c.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let a = 'HELLO WORLD'
// let b = 'LOREM IPSUM'
// let c = 'JAVASCRIPT IS COOL'
// console.log(a,'-',a.toLocaleLowerCase());
// console.log(b,'-',b.toLocaleLowerCase());
// console.log(c,'-',c.toLocaleLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = '        dirty string   '
// console.log(str.trim())

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let string = 'Ревуть воли як ясла повні'
// const stringToArray = (str) => str.split(' ')
//
// console.log(stringToArray(string));


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

// let numbers = [10,8,-7,55,987,-1011,0,1050,0];
// let strNum = numbers.map(value => value.toString())
// console.log(strNum)

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки
// в залежності від значення аргументу direction.
// let nums = [11, 21, 3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// const sortNums = (arrOfNums, direction) => {
//     if (direction === 'ascending') {
//         return arrOfNums.sort((a, b) => a - b)
//     } else if (direction === 'descending') {
//         return arrOfNums.sort((a, b) => b - a)
//     }
// }
//
// console.log(sortNums(nums, 'descending'));

// ==========================
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

// console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));
//
// console.log(coursesAndDurationArray.filter((item) => item.monthDuration > 5));
// console.log(coursesAndDurationArray.map((value, index) => ({...value, id: index + 1})));
//

// =========================
//     описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//

// let cardSuit = ['spade', 'diamond', 'heart', 'clubs']
// let values = ['6','7','8','9','10','jack','queen','king']
// const deck = []
//
// for (const card of cardSuit) {
//     for (const value of values) {
//         let color
//            if (card==='diamond'|| card=== 'heart'){
//                color = 'red'
//             } else {
//                 color = 'black'
//             }
//             deck.push({
//                 cardSuit:card,
//                 value:value,
//                 color: color
//             })
//     }
// }
// console.log(deck);

// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker