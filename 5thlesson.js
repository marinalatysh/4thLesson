let pow = function (x, y) {
    let result = 1

    for (let i = 0; i < y; i++) {

        result *= x; 
        console.log("у цій ітерації результат " + result)

    }

return result;

}

console.log(pow(2,3));


console.log(pow(2,10));