// Part 1 - Thinking Functionally
function sumArray(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

// Example usage:
const sum = sumArray([1, 2, 3, 4, 5]); // Use numbers instead of names
console.log("Sum:", sum);

// Part 2 - Thinking Methodically
function calculateAverage(numbers) {
    // Check if the array is empty to avoid division by zero
    if (numbers.length === 0) {
        return 0;
    }

    // Sum all numbers in the array
    const sum = numbers.reduce((acc, num) => acc + num, 0);

    // Calculate the average by dividing the sum by the number of elements
    const average = sum / numbers.length;

    // Return the average
    return average;
}

// Test the Function
const testArray = [2, 4, 6, 8, 10];
console.log(`The average of [${testArray}] is ${calculateAverage(testArray)}`);

// Test with an empty array
console.log(`The average of an empty array is ${calculateAverage([])}`);

// Sum an array of numbers
const sumArray = (numbers) => numbers.reduce((sum, num) => sum + num, 0);

// Calculate the average of an array of numbers
const averageArray = (numbers) => numbers.length ? sumArray(numbers) / numbers.length : 0;

// Find the longest string in an array of strings
const longestString = (strings) => strings.reduce((longest, str) => 
    str.length > longest.length ? str : longest, '');

// Return strings longer than a given length
const stringsLongerThan = (strings, length) => strings.filter(str => str.length > length);

// Print numbers from 1 to n recursively
const printNumbers = (n, current = 1) => {
    if (current > n) return;
    console.log(current);
    printNumbers(n, current + 1);
};

// Example usage:
console.log("Sum:", sumArray([1, 2, 3, 4, 5]));
console.log("Average:", averageArray([1, 2, 3, 4, 5]));
console.log("Longest string:", longestString(['say', 'hello', 'in', 'the', 'morning']));
console.log("Strings longer than 3:", stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3));
console.log("Printing numbers from 1 to 5:");
printNumbers(5);

// Sample data - Part 2
const data = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
  ];
  
  // Sort the array by age
  const sortByAge = (arr) => arr.sort((a, b) => parseInt(a.age) - parseInt(b.age));
  
  // Filter the array to remove entries with an age greater than 50
  const filterAgeAbove50 = (arr) => arr.filter((item) => parseInt(item.age) <= 50);
  
  // Map the array to change "occupation" to "job" and increment age by 1
  const transformData = (arr) => arr.map((item) => ({
    ...item,
    job: item.occupation,
    age: (parseInt(item.age) + 1).toString()
  }));
  
  // Calculate the sum and average of ages
  const calculateAgeStats = (arr) => {
    const ageSum = arr.reduce((sum, item) => sum + parseInt(item.age), 0);
    const averageAge = ageSum / arr.length;
    return { sum: ageSum, average: averageAge };
  };
  
  // Execute and log results
  console.log("Sorted by age:");
  console.log(sortByAge([...data]));
  
  console.log("\nFiltered age <= 50:");
  console.log(filterAgeAbove50(data));
  
  console.log("\nTransformed data:");
  console.log(transformData(data));
  
  const ageStats = calculateAgeStats(data);
  console.log("\nAge statistics:");
  console.log(`Sum of ages: ${ageStats.sum}`);
  console.log(`Average age: ${ageStats.average.toFixed(2)}`);

  // Part 3 - Function that modifies the original object (pass by reference)
function incrementAgeInPlace(obj) {
    if (!obj.hasOwnProperty('age')) {
        obj.age = 0;
    }
    obj.age++;
    obj.updated_at = new Date();
    return obj;
}