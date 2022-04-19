
var x = 10
function foo() {
    var x = 1;

    return () => {
        var y = 10;

        x++
        y++
        console.log(y);

        console.log(x);
    }
}


const f = foo()
console.log(f);
f()
f()
console.log(b = foo());
b()
