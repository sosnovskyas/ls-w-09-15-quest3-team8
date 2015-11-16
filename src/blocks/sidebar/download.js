var canvas = document.getElementById('result');
var context = canvas.getContext('2d');

$('.setting__form')
  .attr('disabled', '')
  .on('submit', function(e) {
    e.preventDefault();
    canvas.width = backgroundWidth;
    canvas.height = backgroundHeight;
    context.drawImage(bgImage, 0, 0, backgroundWidth, backgroundHeight);
    var x = document.getElementById('spinner_x').value;
    var y = document.getElementById('spinner_y').value;
    var opacityValue = document.getElementById('opacity__input').value;
    context.globalAlpha= (opacityValue / 100);
    context.drawImage(wmImage, x, y, watermarkWidth, watermarkHeight);
    window.location.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
  });