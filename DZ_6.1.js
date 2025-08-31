function checkProbabilityTheory() {
    let count = 15;     // Количество итераций
    let evenCount = 0;  // Четные числа 
    let oddCount = 0;   // Нечетные числа 

    for (let i = 0; i < count; i++) {
        let randomNum = Math.random() * (1000 - 100 + 1) + 100;
        randomNum = Math.ceil(randomNum);
         if (randomNum % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    console.log(count);
    console.log(evenCount);
    console.log(oddCount);


    const totalNumbers = count;
    const evenPercentage = (evenCount / totalNumbers) * 100;
    const oddPercentage = (oddCount / totalNumbers) * 100;

    console.log(`Процент четных чисел: ${evenPercentage.toFixed(2)}%`);
    console.log(`Процент нечетных чисел: ${oddPercentage.toFixed(2)}%`);

}


checkProbabilityTheory();