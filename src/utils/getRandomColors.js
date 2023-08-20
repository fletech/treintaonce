const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return n.slice(0, 6);
};

export const getRandomColors = (url) => {
  const color1 = randomHexColorCode();
  const color2 = randomHexColorCode();
  const color3 = randomHexColorCode();
  const color4 = randomHexColorCode();

  return `${url}?colors=${color1},${color2},${color3},${color4}`;
};
