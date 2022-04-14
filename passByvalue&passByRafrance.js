//////////////////////////////////pass by value & pass by rafrance///////////////////////////

var obj = {
    name: "Saulat",
    company: "Allied",
};

var a = obj.name;   /////////////pass by value 
a = "Hassam";
console.log(a);
console.log(obj);

// var b = obj;         ///////////pass by rafrance
// b.name = "Hassam";
// console.log(b);
// console.log(obj);