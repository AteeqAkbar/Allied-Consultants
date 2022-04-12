
////////////////////async////////////////////////
// async function foo() {
//     console.log("A");
//     console.log("B");
//     await setTimeout(() => {
//         console.log("get con");
//     }, 100);
//     // await console.log("get con");
//     console.log("C");

// }
// foo()
// console.log("D");
// console.log("E");



//////////////////////EXAMLE async is a promise enable ///////////////////////



// async function foo() {
//     console.log("B");
// await TimeOut()      //output A B E F C D Timeout
// await get()             //output A B E F  GET DATA C D
// ///SAME AS//
// const result = await get()
// console.log(result);                //output A B E F GET DATA GET DATA C D

// const arr = await Promise.all([get(), getcon()]) //output A B E F get data get data [ 'get data', 'get data' ] C D
// console.log(arr);


//     console.log("C");
//     console.log("D");

// }
// console.log("A");
// foo()
// console.log("E");
// console.log("F");


// function TimeOut() {
//     setTimeout(() => {
//         console.log("time out");

//     }, 3000);
// }
// function get() {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             console.log("get data");
//             res("get data")

//         }, 3000);
//     })
// }
// function getcon() {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             console.log("get data");
//             res("get data")

//         }, 3000);
//     })
// }


