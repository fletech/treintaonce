export const getRandomNumbers = (works) => {
  if (works.length < 2) {
    console.error("The array length must be at least 2.");
    return null;
  }

  const max = works.length - 1;
  let number1 = Math.floor(Math.random() * max);
  let number2 = Math.floor(Math.random() * max);

  // Make sure the numbers are distinct
  while (number2 === number1) {
    number2 = Math.floor(Math.random() * max);
  }

  return [number1, number2];
};
