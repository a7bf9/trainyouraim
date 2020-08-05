function resizeSmall() {
  var canvas = document.getElementById("trainer");
  canvas.width = 35/100 * screen.width;
  canvas.height = 35/100 * screen.height;
}

function resizeMedium() {
  var canvas = document.getElementById("trainer");
  canvas.width = 50/100 * screen.width;
  canvas.height = 50/100 * screen.height;
}

function resizeBig() {
  var canvas = document.getElementById("trainer");
  canvas.width = 65/100 * screen.width;
  canvas.height = 65/100 * screen.height;
}
