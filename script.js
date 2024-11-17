// Task 2:
const numbers = [10, 20, 30, 40, 50];

const calculateSumAndAverage = (arr) => {
    const total = arr.reduce((sum, num) => sum + num, 0);
    const average = total / arr.length;
    return { total, average };
};

const result = calculateSumAndAverage(numbers);
console.log("Sum:", result.total, "Average:", result.average);

// Task 3:
const strings = ["apple", "banana", "apple", "orange", "banana"];

const removeDuplicates = (arr) => {
    return [...new Set(arr)];
};

const uniqueStrings = removeDuplicates(strings);
console.log("Unique values:", uniqueStrings);
