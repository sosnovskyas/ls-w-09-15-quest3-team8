;(function(window) {
  var canvas = document.getElementById("canvas"),
    ctx       = canvas.getContext('2d'), // Контекст
    canvasImage = new Image(),
    watermarkImage = new Image();              // "Создаём" изображение

    canvasImage.src = 'http://placeimg.com/600/400/1';
    watermarkImage.src = 'http://placeimg.com/200/200/1';

  canvasImage.onload = function() {
      try{
        ctx.drawImage(canvasImage, 0, 0);
        ctx.drawImage(watermarkImage, 10, 10);
      } catch(e) {
        alert('error');
      }
  };
  canvas.addEventListener("mousedown", mouseDownListener, false);
  window.addEventListener("mouseup", mouseUpListener, false);

  function mouseDownListener() {

  }
})(window);