
//////////////////////////////cluser in javascript///////////////////////////
// fuction can remanber its birth place  variable///////////////////////////

// var x = 10
// function foo() {
//     var x = 1;

//     return () => {
//         var y = 10;

//         x++
//         y++
//         console.log(y);

//         console.log(x);
//     }
// }


// const f = foo()
// console.log(f);
// f()
// f()
// console.log(b = foo());
// b()


///////////////////////////////////////example///////////////////////////
// function add(x) {
//     return (y) => x + y;
// }
// const add5 = add(5)
// console.log(add5(10));
////////////////////////////////an other way//////////////////////////
function add(x) {
    return (y) => x + y;
}

console.log(add(10)(9));