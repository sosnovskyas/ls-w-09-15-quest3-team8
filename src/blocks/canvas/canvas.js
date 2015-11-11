;(function() {
  var canvas = document.getElementById("canvas"),
    ctx       = canvas.getContext('2d'), // Контекст
    canvasImage = new Image(),
    watermarkImage = new Image();              // "Создаём" изображение
  canvasImage.src = 'http://placeimg.com/600/400/1';
  //watermarkImage.src = 'http://placeimg.com/200/200';

  canvasImage.onload = function() {
    ctx.drawImage(canvasImage, 100, 100,60,40);
    watermarkImage.onload = function() {
      //ctx.drawImage(watermarkImage, 10, 10);
    };
  };


})();