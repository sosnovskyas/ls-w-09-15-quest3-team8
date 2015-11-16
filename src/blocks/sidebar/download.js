
$('.setting__form')
  .attr('disabled', '')
  .on('submit', function(e) {
    e.preventDefault();
    var x = document.getElementById('spinner_x').value;
    var y = document.getElementById('spinner_y').value;
    //$('body').append('<canvas id=result width=' + backgroundWidth + ' height = '+backgroundHeight +' />');
    context.drawImage(wmImage, x, y, watermarkWidth, watermarkHeight);

    //canvas.toDataURL('image/jpeg');
    //var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    window.location.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
  });