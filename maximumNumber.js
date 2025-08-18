const maxNumber = (numbers) => {
  const filter = Math.max(...numbers);
  return filter;
};

console.log(maxNumber([1, 2, 3, 5, 4, 6, 8, 7, 9, 1, 12, 14, 46, 8]));
