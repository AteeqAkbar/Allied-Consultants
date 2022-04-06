// // // console.log("Ateeq");

// // // window.prompt("Enter Name")
// // function lifeInWeeks(age) {
// //     var x = 32872.5;
// //     var y = 4692.86;
// //     var z = 1080;
// //     var age = prompt("Enter Your age in years:");
// //     var days = x - (age * 365);
// //     var weeks = y - (age * 52);
// //     var months = z - (age * 12);
// //     console.log("Your age after calculations is:" + days + " Days" + weeks + " Weeks" + months + " months");
// function leepYear(year) {
//     if (year % 4 == 0 && year % 400 === 0 && year % 100 !== 0)
//         console.log(`${year} Is a leap Year`);
//     else {
//         console.log("not a leap year")
//     }

// }
// leepYear(2020)
// aro fuction
// const f = () => { console.log("halo") }
// f();
// async function
// console.log("before");
// setTimeout(() => {
//     console.log("set time out")
// }, 5000);
// console.log("after");


// function get() {
//     setTimeout(() => {
//         console.log("get");
//     }, 3000);
// }
// function disp() {
//     setTimeout(() => {
//         console.log("dispay");
//     }, 1000);
// }
// get()
// disp()


// fatch data throw Api


// function get(a) {

//     setTimeout(() => {
//         disp()
//         console.log("get");
//     }, 3000);

// }
// function disp() {
//     setTimeout(() => {
//         console.log("dispay");
//     }, 1000);
// }
// get(disp)

// const p = new Promise(function (res, rej) {
//     var a = true;
//     if (a) {
//         console.log("seccess");
//         res("seccess")
//     }
//     else
//         console.log("rejact");

// })


////////////////////////setTimeOut//////////////////////

// console.log("start");
// console.time()
// let time = 3;
// for (let i = 0; i <= 4; i++) {
//     setTimeout(() => {
//         console.log(`${time} sec`);
//         time = time + 3
//     }, time * 1000);
// }
// console.log("End");

//
//
//
////////////////////////////setInterval//////////////////////////////////

// program to stop the setInterval() method after five times

// let count = 0;

// function creation
// let interval = setInterval(function () {

// increasing the count by 1
// count += 1;

// whencount equals to 5, stop the function
// if (count === 5) {
// clearInterval(interval);
// }

// display the current time
// let dateTime = new Date();
// let time = dateTime.toLocaleTimeString();
// console.log(time);

// }, 2000);

/////////////////////////Exaple: 2///////////////////////////
// console.log("Start");
// console.log("Mid");

// let count = 0
// let interval = setInterval(() => {
//     count = count + 3000;
//     if (count == 15000) {
//         clearInterval(interval)
//     }
//     console.log(`${count} Milisecend`);

// }, 3000);
// console.log("End");




/////////////////////////////// Promise ////////////////////////////

////////////////////////////// example : 1//////////////////////////
// function fun1() {
//     return new Promise(function (resolve, rejact) {
//         setTimeout(() => {
//             const error = false
//             if (!error) {
//                 console.log("fuction : your promise is resolve");
//                 resolve();

//             } else {
//                 console.log("fuction : your promise is not resolve");
//                 rejact("Sorry not Fulfill")
//             }
//         }, 2000);
//     })
// }
// fun1().then(() => { console.log("Ateeq: Thanks for Resolveing"); }).catch((error) => { console.log("Very Bad bro " + error); })

// ///////////////////////////////Example : 2//////////////////////////

// myPromise = new Promise((resolve, rejact) => {
//     let num = 0;
//     if (num == 0)
//         resolve("Num = 0")
//     else
//         rejact("Error")
// })

// myPromise.then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });

////////////////////////////////////////////////// example 3////////////////////////////////

// prom = new Promise((res, rej) => {
//     var a = false
//     if (a)
//         res("success")
//     else
//         rej("rejact")

// })
// prom.then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);

// });


/////////////////////////get data by promise//////////////////
/////////////////////////chained promise.////////////////////
// const p = new Promise((res, rej) => {
//     let getData = true
//     if (getData) {
//         setTimeout(() => {
//             console.log("Get Data");
//             res("get Data")
//         }, 3000);
//     }
//     else {
//         console.log("No Data loaded");
//         rej("no data")
//     }
// })


// p.then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);

// });

// /////////////////////////example//////////////////
// function num(a) {
//     return new Promise((res, rej) => {
//         if (a <= 10) {
//             res(a);
//         } else {

//             rej(a);
//         }
//     })

// }
// num(2).then((result) => {
//     console.log(`Number ${result} is less then 10`);

// }).catch((err) => {
//     console.log(`Number ${err} is greater then 10`);

// });

////////////////////////same above///////////////////

// const f = (res, rej) => {
//     if (a <= 10) {
//         res(a);
//     } else {

//         rej(a);
//     }
// }

// function num(a) {
//     return new Promise(f)

// }
// num(2).then((result) => {
//     console.log(`Number ${result} is less then 10`);

// }).catch((err) => {
//     console.log(`Number ${err} is greater then 10`);

// });
///////////////////////////////////chain promise///////////////////.
// const p = new Promise((res, rej) => {
//     let a = true;
//     if
//         (a) {

//         res("get conection")
//     }
//     else {
//         rej("not conetied")

//     }

// })



// p.then((result) => {
//     console.log(result);
//     return "get data"
// }).then((result) => {
//     console.log(result);
//     return "data formt"
// }).then((result) => {
//     console.log(result);
//     return "Display data"
// }).then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);

// });


///////////////////////example :2/////////////////


// const p = new Promise((res, rej) => {
//     let a = true;
//     if
//         (a) {
//         setTimeout(() => {
//             res("get conection")

//         }, 3000);
//     }
//     else {
//         rej("not conetied")

//     }

// })



// p.then((result) => {
//     console.log(result);
//     return "get data"
// }).then((result) => {
//     console.log(result);
//     return "data formt"
// }).then((result) => {
//     console.log(result);
//     return "Display data"
// }).then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);

// });
