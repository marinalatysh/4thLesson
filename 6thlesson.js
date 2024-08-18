let checkProbabilityTheory = function (count)  {
    // встановлюємо кількість парних і непарних чисел на 0
    let evenCount = 0;
    let oddCount = 0;

    //пишемо цикл, де робимо кількість ітерацій, яку передав юзер. 

    for (let i = 0; i < count; i++) {
    
    //генеруємо рандомне число від 100 до 1000 - спочатку від 0 до 900.999... , потім округлюємо - від 0 до 900, додаємо 100 - від 100 до 1000
    let randomNumber = Math.floor((Math.random() * (1000 - 100 + 1)) + 100)

    // console.log(randomNumber)

    //у кожній ітерації перевіряємо, чи є число парним чи непарним і збільшуємо відповідне значення на 1
    if (randomNumber % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}
    //вираховуємо відсоток парних і непарних чисел відносно загальної кількості
    let evenPercent = (evenCount / count) * 100;
    let oddPercent = (oddCount / count) * 100;

    //виводимо результат у консоль
    console.log("Кількість згенерованих чисел: " + count);
    console.log("Парних чисел: " + evenCount);
    console.log("Не парних чисел: " + oddCount);
    console.log("Відсоток парних до не парних: " + evenPercent.toFixed(2)  + " % " + oddPercent.toFixed(2));
    
    return
}


checkProbabilityTheory(10000);
