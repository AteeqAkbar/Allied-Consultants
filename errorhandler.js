//////////////////////////////////////error handler //////////////////////////

function getConnection() {
    return new Promise((res, rej) => {
        var a = false;
        if (a) res("Connected");
        else rej("Connection Failed");
    });
}

function getData() {
    return new Promise((res, rej) => {
        var a = false;
        if (a) res("Get Data");
        else rej("Get Data Failed");
    });
}

async function result() {
    var [result1, result2] = await errorHandler(getConnection());
    var [res, rej] = await errorHandler(getData());
    console.log(result1, result2);
    console.log(res, rej);
    // console.log(b);
}

function errorHandler(p) {
    return p.then((result) => {
        return [result, undefined];
    }).catch((err) => {
        return [undefined, err];
    });
}

result();
