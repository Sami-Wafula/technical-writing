//child function

function floatInt (a){
    let int = parseInt(a);
    return int;
}

console.log(floatInt(23.67)) //test - returns 23

function mul(a, b){
    let res = a * b;
    return res;
}

console.log(mul(2.0, 2.9)) //test - returns 5.8

function mul(a, b){

    function floatInt (a){
        let int = parseInt(a);
        return int;
    }

    let res = a * b;
    return floatInt(res);
}

console.log(mul(2.0, 2.9))