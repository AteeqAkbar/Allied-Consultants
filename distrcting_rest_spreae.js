
////////////////////////distracting array////////////////////////

/////////////////////////first with out distracting//////////////


// user = ["Ateeq", 24, "Lahore"]
// name = user[0]
// age = user[1]
// city = user[2]
// console.log(name, age, city);


/////////////////////////with distracting////////////////////

// user = ["Ateeq", 24, "Lahore", ["male", 25000]]
// let [name, age, city, [gander, salry]] = user
// console.log(name, age, city, gander, salry);      //////output////Ateeq 24 Lahore male 25000

/////////////////////////////example/////////////////////////

// user = ["Ateeq", 24, "Lahore", ["male", 25000]]
// let [name, ...args] = user
// console.log(name, args);     //////output////Ateeq [ 24, 'Lahore', [ 'male', 25000 ] ]

/////////////////////////////example/////////////////////////

// arr = ["Ateeq", 24, "Lahore",]
// function user([name, age, city]) {
//     console.log(name, age, city);     //////output////Ateeq 24 Lahore

// }
// user(arr)



/////////////////////////////example 2/////////////////////////


// function user() {
//     return ["Ateeq", 24, "Lahore",]      //////output////Ateeq 24 Lahore

// }
// [name, age, city] = user()
// console.log(name, age, city);     //////output////Ateeq 24 Lahore



//////////////////////////distrcting  And rest spread oprater///////////////////////
// let a, b, rest;
// [a, b] = [10, 20];
// console.log(a); // 10
// console.log(b); // 20

// [a, b, ...rest] = [10, 20, 30, 40, 50];
// console.log(a); // 10
// console.log(b); // 20
// console.log(rest); // [30, 40, 50]

// ({ a, b } = { a: 10, b: 20 });
// console.log(a); // 10
// console.log(b); // 20

// // Stage 4(finished) proposal
// ({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
// console.log(a); // 10
// console.log(b); // 20
// console.log(rest); // {c: 30, d: 40}
