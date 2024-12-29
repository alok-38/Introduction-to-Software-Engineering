function simpleArraySum(ar) {
    // Write your code here
    let sum = 0;
    for (let index = 0; index < ar.length; index++) {
        sum += ar[index];
    }
    return sum;
}

// Usiing reduce
function simpleArraySumReduce(ar) {
    return ar.reduce((sum, value) => sum + value, 0);
}
