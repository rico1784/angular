function add(a,b){
    return a + b;
}

function substract(a,b){
    return a - b;
}


function multiply(a,b){
    return a * b;
}

function divide(a,b){
    if (b===0){
        throw new Error("You cannot divide by 0")
    }
    return a / b;
}

const pi = 3.14159265358

export {
    add,
    substract,
    multiply,
    divide,
    pi
}
