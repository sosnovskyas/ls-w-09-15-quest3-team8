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
    var xPos = document.getElementById('spinner_x').value;
    var yPos = document.getElementById('spinner_y').value;
    var opacityValue = 100.0;
    var opacity = document.getElementById('opacity__input').value;
    if (opacity){
      opacityValue = opacity;
    }
    context.globalAlpha= (opacityValue / 100);

    if (multiMode) {
      var x = 0;
      var y = 0;
      var w = 0;
      var h = 0;
      var wMax = Math.floor(backgroundWidth/watermarkWidth) + 1;
      var hMax = Math.floor(backgroundHeight/watermarkHeight) + 1;
      var wSmeschenie = 2;
      var hSmeschenie = 10;

      while(h < hMax) {
        while(w < wMax) {
          x = ((watermarkWidth * w) + (xPos * w)) + wSmeschenie;
          y = ((watermarkHeight * h) + (yPos * h)) + hSmeschenie;
          console.log(xPos, yPos, x,y, w,h);
          context.drawImage(wmImage, x, y, watermarkWidth, watermarkHeight);
          w++;
        }
        w = 0;
        h++;
      }
    } else {
      context.drawImage(wmImage, xPos, yPos, watermarkWidth, watermarkHeight);
    }

    // dark magic for adding extention to file
    var anchor = document.createElement('a');
    anchor.setAttribute('download', 'watermark.jpeg');
    anchor.setAttribute('href', canvas.toDataURL("image/jpeg"));
    anchor.click();

    //canvas.remove();
    //anchor.remove();
});