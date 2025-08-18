const vowelsCount = (str) => {
  str = str.toLowerCase();

  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"];

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
};



console.log(vowelsCount("Programming Hero"));
