function displayNumbersAndSum(start, end) {
    let numbers = [];
    let totalSum = 0;

    for (let i = start; i <= end; i++) {
        numbers.push(i);
        totalSum += i;
    }

    console.log(numbers.join(' '));
    console.log(`Sum: ${totalSum}`);
}