let myArray = [1, 4, 2, 3, 5, 6];

function sumFac(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
    // sum += numbers[i] // same as above
  }
  return sum;
}
console.log(sumFac([3, 3, 2, 6, 4])); // 18
let result = sumFac(myArray);
console.log(result); // 21
