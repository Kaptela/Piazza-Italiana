var img = new Image();
img.src = 'https://images.adsttc.com/media/images/54f7/bf8e/e58e/ce08/b400/022e/large_jpg/3.jpg?1425522566';
var CanvasXSize = 900;
var CanvasYSize = 719;
var speed = 30;
var scale = 1.05;
var y = -4.5;
var dx = 0.75;
var imgW;
var imgH;
var x = 0;
var clearX;
var clearY;
var ctx;
img.onload = function() {
  imgW = img.width * scale;
  imgH = img.height * scale;
  if (imgW > CanvasXSize) {
    x = CanvasXSize - imgW;
  }
  if (imgW > CanvasXSize) {
    clearX = imgW;
  } else {
    clearX = CanvasXSize;
  }
  if (imgH > CanvasYSize) {
    clearY = imgH;
  } else {
    clearY = CanvasYSize;
  }
  ctx = document.getElementById('canvas').getContext('2d');
  return setInterval(draw, speed);
}

function draw() {
  ctx.clearRect(0, 0, clearX, clearY);
  if (imgW <= CanvasXSize) {
    if (x > (CanvasXSize)) {
      x = 0;
    }
    if (x > (CanvasXSize - imgW)) {
      ctx.drawImage(img, x - CanvasXSize + 1, y, imgW, imgH);
    }
  } else {
    if (x > (CanvasXSize)) {
      x = CanvasXSize - imgW;
    }
    if (x > (CanvasXSize - imgW)) {
      ctx.drawImage(img, x - imgW + 1, y, imgW, imgH);
    }
  }
  ctx.drawImage(img, x, y, imgW, imgH);
  x += dx;
}