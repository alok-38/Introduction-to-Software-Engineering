function linearSearch(arrayOfNumbers, target) {
    for (let index = 0; index < arrayOfNumbers.length; index++) {
        if (arrayOfNumbers[index] === target) {
            return index; // Found the target, return the index
        }
    }
    return -1; // If the loop finishes without finding the target, return -1
}

const arrayOfNumbers = [10, 20, 30, 40, 50];
let target = 30;

let result = linearSearch(arrayOfNumbers, target);

if (result !== -1) {
    console.log(`Element ${target} found at index ${result}`);
} else {
    console.log(`Element ${target} not found`);
}
