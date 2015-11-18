Element.prototype.remove = function() {
  this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
  for(var i = this.length - 1; i >= 0; i--) {
    if(this[i] && this[i].parentElement) {
      this[i].parentElement.removeChild(this[i]);
    }
  }
};

$('.setting__form')
  .on('submit', function(e) {
    e.preventDefault();

    function convertToDataURLviaCanvas(url, callback, outputFormat){
      var img = new Image();
      img.crossOrigin = 'Anonymous';
      img.onload = function(){
        var canvas = document.createElement('CANVAS');
        var ctx = canvas.getContext('2d');
        var dataURL;
        canvas.height = this.height;
        canvas.width = this.width;
        ctx.drawImage(this, 0, 0);
        dataURL = canvas.toDataURL(outputFormat);
        callback(dataURL);
        canvas = null;
      };
      img.src = url;
    }

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

    // dark magic for adding extention to file
    var anchor = document.createElement('a');
    anchor.setAttribute('download', 'watermark.jpeg');
    anchor.setAttribute('href', canvas.toDataURL("image/jpeg"));
    anchor.click();

    canvas.remove();
    anchor.remove();
});