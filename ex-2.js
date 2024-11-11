function countPositivesPositivesSumNegatives(input) {
  let result = [];
  let countPositives = 0;
  if (input === null || input.length <= 0) {
    return [];
  }
  let sumNegatives = input.reduce((acc, cur) => {
    cur > 0 ? countPositives++ : (acc += cur);
    return acc;
  }, 0);
  result.push(countPositives);
  result.push(sumNegatives);
  return result;
}

let result1 = countPositivesPositivesSumNegatives([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
]);
console.log(result1); // [10, -65]

let result2 = countPositivesPositivesSumNegatives("");
console.log(result2); // []
