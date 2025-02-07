function processData(numbers, callback) {
    return callback(numbers);
  }
  
  function filterOdd(numbers) {
    return numbers.filter(num => num % 2 !== 0);
  }
  
  function doubleNum(numbers) {
    return numbers.map(num => num * 2);
  }
  
  function calcSum(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
  }
  
  // Bonus: Callback function 
  function findMax(numbers) {
    return numbers.reduce((max, num) => (num > max ? num : max), numbers[0]);
  }
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log("Filtered Odd Numbers:", processData(numbers, filterOdd)); 
  console.log("Doubled Numbers:", processData(numbers, doubleNum));  
  console.log("Sum of Numbers:", processData(numbers, calcSum));    
  console.log("Maximum Number:", processData(numbers, findMax));  
  
