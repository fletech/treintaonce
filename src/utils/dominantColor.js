export const get_average_rgb = (img) => {
  var context = document.createElement("canvas").getContext("2d");
  if (typeof img == "string") {
    var src = img;
    img = new Image();
    img.setAttribute("crossOrigin", "");
    img.src = src;
  } else {
    return "fff";
  }
  context.imageSmoothingEnabled = true;
  context.drawImage(img, 0, 0, 1, 1);
  return context.getImageData(0, 0, 1, 1).data.slice(0, 3);
};
