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

console.log('start') //выполняются в своем порядке(синхронном)

setTimeout(() => {
    console.log('setTimeout')
})

Promise.resolve().then(() => {
    console.log('resolve')
})

console.log('end')

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


