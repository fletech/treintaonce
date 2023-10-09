const genreMapper = (object, name) => {
  let article;
  if (object[name].endsWith("as")) {
    article = "las";
  } else if (object[name].endsWith("os")) {
    article = "los";
  } else if (!object[name].endsWith("s")) {
    article = "";
  } else {
    article = "los";
  }

  return (object[`${name}_article`] = article);
};

const getFormattedDate = () => {
  const date = new Date();
  let currentDay = String(date.getDate()).padStart(2, "0");
  let currentMonth = String(date.getMonth() + 1).padStart(2, "0");
  let currentYear = date.getFullYear();
  let currentDate = `${currentDay}-${currentMonth}-${currentYear}`;
  return currentDate;
};

export { genreMapper, getFormattedDate };
