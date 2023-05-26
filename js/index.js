"use strict";

// __________________item 1_________________
// let someText = "default text",
//     textBlock = document.querySelector('.block__text');



// let promiseTimeout = () =>{
//     return new Promise(function(resolve, reject) {
//         setTimeout(() => {
//             resolve(`new text`)
//             reject(someText)
//         },5000);
//     });
// };
// promiseTimeout().then(text=>{
//     textBlock.innerText = text;
// }).catch(old_text=>{
//     textBlock.innerText = old_text;
// })

// __________________item 2_________________

// console.log('start') //выполняются в своем порядке(синхронном)

// setTimeout(() => {
//     console.log('setTimeout')
// })

// Promise.resolve().then(() => {
//     console.log('resolve')
// })

// console.log('end')

// Ассинхронные операции:

//Промисы это микротаски

// setTimeout, setInterval, addEventListener - Макротаски,работающие не на движке js ,на движке браузера

// Call stack - хранилище всех вызов куда помещаются все наши операции в коде при выполнении(сначала выполняются синхронные опереции)
// 25) сначала в наше хранилище попадают синхронные операции такие как console.log(start) - как он выполнился сразу пропадает из него
// 28) дальше идет ассинхроная операция setTimeout она помещается в очередь макротаски и ток по окончанию синхронного кода выполнится и попадет
// в Call stack

// CallStack
// 25 строка) console.log('start') выполнилась и далилась из стэка
// 27 строка) setTimeout - ассинхронная операция идет в macroStack и ожидает окончание синхронного кода
// 31 строка) Promise    - ассинхронная операция идет в microStack и ожидает окончание синхронного кода
// 35 строка) console.log('end') выполнилась и далилась из стэка

// microStack
// Promise 

// _______________

// macroStack
// setTimeout 

// в череду приоритетности microStack, по сравнению macroStack, первым из них попадет в стэк
// promise , а потом уже setTimeout (попал в стэк - также и исчез)
// вывод будет таким:
// 25) start
// 35) end
// 32) resolve
// 28) setTimeout

// __________________item 3_________________

// setTimeout(() => {
//     console.log('timeout')
// }, 0);

// const p = new Promise((resolve, reject) => {
//     console.log('Promise creation');
//     resolve()
// })

// const p2 = new Promise((resolve, reject) => {
//     console.log(123)
// })
// p.then(() => {
//     console.log('Promise resolving');
// })

// console.log('End')

// console.log('p2 =>>', p2)

// начнем по порядку:
// 73 line) - setTimeout ассинхронная операция, идет в macroStack, и ожидает окончание синхронного кода, после попадет в стэк и выполняется
// 77 line) - создание промиса (попадет в стэк) выполнится
// 83 line) - аналогично строке сверху
// 86 line) - обработка промиса(), следовательно это попадает в microStack и ждет завершения синхронного кода
// 89 line) - синхронная операция - выполнится без колебаний
// 91 line) - так как в console.log coдержит лишь переменную промиса и никак ее 
//  не обрабатывает то вывод будет сразу же

// что будет в консоле:
// 1  Promise creation  -  77 line) создается промис и console.log выполнятся
// 2. 123               -  82 line) синронная операция
// 3. End               -  89 line) синронная операция
// 4. p2 =>> {promise}  -  91 line) - так как в console.log coдержит лишь переменную промиса и никак ее 
//  не обрабатывает то вывод будет сразу же
// 5. Promise resolving - 86 line) обработка промиса, следовательно это попадает в microStack и по завершения синхронного кода попадет в стэк 
// и выполнится первым нежеле timeout 
// 6. timeout           -  73 line)  попадет в стэк самым последней тк. macroStack , а приоретный вывод у microstack



// Вывод будет таким
// Promise creation
// 123
// End
// p2 =>> Promise {<pending>}
//Promise resolving
// timeout