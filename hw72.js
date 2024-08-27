var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
    };    

services['Розбити скло'] = "200 грн";

//console.log(Object.values(services));

services.price = function () {

    let sum = 0

    for (let key in this) {
    if (typeof this[key] === 'string' && this[key].includes('грн')) {
   // console.log(this[key]);
    sum +=  Number.parseInt(this[key]);
  //  console.log(Number.parseInt(this[key]));
   // console.log(sum);
}
}
return sum;
}

services.getPricesArray = function() {
    let priceArr = [];
    for (let key in this) {
        if (typeof this[key] === 'string' && this[key].includes('грн')) {
            priceArr.push(Number.parseInt(this[key]));
        //    console.log(priceArr);
        }
};
return priceArr;
}

services.minPriceCount = function() {
let minPrice = Math.min(...this.getPricesArray());
return minPrice;
};

services.maxPriceCount = function() {
    let maxPrice = Math.max(...this.getPricesArray());
    return maxPrice;
};



console.log(`загальна вартість наданих послуг: ${services.price()}`);
console.log(`мінімальний price: ${services.minPriceCount()}`);
console.log(`максимальний price: ${services.maxPriceCount()}`);