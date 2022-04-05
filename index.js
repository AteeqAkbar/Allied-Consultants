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

console.log("start");
// console.time()
// let time = 3;
// for (let i = 0; i <= 4; i++) {
//     setTimeout(() => {
//         console.log(`${time} sec`);
//         time = time + 3
//     }, time * 1000);
// }

setInterval(() => {
    console.log(`${time}`)
}, 3000);
console.log("End");
