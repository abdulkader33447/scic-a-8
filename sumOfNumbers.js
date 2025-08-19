function sumNumber(numbers) {
  let sum = 0;
  for (let num of numbers) {
    // sum += num; //ok
    sum = sum + num;
  }
  return sum;
}

console.log(sumNumber([1, 2, 3, 4, 5]));
