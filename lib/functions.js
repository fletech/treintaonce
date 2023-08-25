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

export { genreMapper };
