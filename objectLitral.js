/////////////////////////object litral///////////////////////

// n = "Name"
// class1 = "BSCS"
// obj = {
//     ["Student" + n]: "Ateeq",
//     class1
//     ,
// detail: function () {
//     return `${this.StudentName} is a student of ${this.class1}`
// }

// detail() {                         ///////same work above function
//     return `${this.StudentName} is a student of ${this.class1}`
// }

//     'detail show'() {                         ///////same work above function
//         return `${this.StudentName} is a student of ${this.class1}`
//     }

// }


// console.log(obj);
// // console.log(obj["detail"]());//////new methad function call
// console.log(obj["detail show"]());//////new methad function call


////////////////////////create a function retarn a object////////////////////////

let arr = ["Ateeq", "Akbar", "BSCS"]
// let fName = "Ateeq"
// let lName = "Akbar"
// let course = "BSCS"
function funObj(fName, lName, course) {
    fullName = fName + " " + lName

    return {
        fullName, course
    }
}
// console.log(funObj(fName, lName, course));
console.log(funObj(...arr));
console.log(funObj(...arr).fullName);

