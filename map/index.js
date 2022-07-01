// marker test
const putTestMarker = () => {
  // Pakistan Lat and Long
  let lat = 33.729388;
  let lon = 73.093146;
  // width and height of current image
  let width = $(".map-class").width();
  let height = $(".map-class").height();
  // image orignal offsets
  let maxX = 10000;
  let minX = 361;
  let maxY = 5050;
  let minY = 206;
  // calculating new offsets
  let xRatio = (minX / maxX) * width;
  let yRatio = (minY / maxY) * height;
  // setting new Offsets
  let newMaxX = width - xRatio;
  let newMinX = xRatio;
  let newMaxY = height - yRatio;
  let newMinY = yRatio;
  // minMax fuction
  let newLog = ((lon + 180) / 360) * (newMaxX - newMinX) + newMinX;
  let newLat = ((-lat + 90) / 180) * (newMaxY - newMinY) + newMinY;
  // setting up marker on map
  $(".marker").css("top", newLat + "px");
  $(".marker").css("left", newLog + "px");
  $(".marker-text").css("top", newLat + 10 + "px");
  $(".marker-text").css("left", newLog - 20 + "px");
};
$(window).on("resize", () => {
  putTestMarker();
});
$(document).ready(() => {
  putTestMarker();
});
