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
