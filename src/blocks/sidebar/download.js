
$('.setting__form')
  .attr('disabled', '')
  .on('submit', function(e) {
    e.preventDefault();

    var rawCanva = document.createElement('canvas');
    rawCanva.setAttribute('id','result');
    document.getElementById('result-wrapper').appendChild(rawCanva);

    var canvas = document.getElementById('result');
    var context = canvas.getContext('2d');

    canvas.width = backgroundWidth;
    canvas.height = backgroundHeight;
    context.drawImage(bgImage, 0, 0, backgroundWidth, backgroundHeight);
    var x = document.getElementById('spinner_x').value;
    var y = document.getElementById('spinner_y').value;
    var opacityValue = 100.0;
    var opacity = document.getElementById('opacity__input').value;
    if (opacity){
      opacityValue = opacity;
    }
    console.log(opacity);
    context.globalAlpha= (opacityValue / 100);
    context.drawImage(wmImage, x, y, watermarkWidth, watermarkHeight);
    window.location.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    rawCanva.destroy();
  });