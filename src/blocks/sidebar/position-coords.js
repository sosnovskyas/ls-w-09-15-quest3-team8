;
var positionCoordsModule = (function() {
  'use strict';
  $(document).ready(function() {
    // watermark parametrs
    var watermark = $('#canvas__watermark');
    var watermarkWidth = parseInt(watermark.css('width'));
    var watermarkHeight = parseInt(watermark.css('height'));

    // canvas parametrs
    var canvas = $('#canvas__img');
    var canvasWidth = parseInt(canvas.css('width'));
    var canvasHeight = parseInt(canvas.css('height'));

    // spinner's parametrs
    var spinnerXMax = (canvasWidth - watermarkWidth);
    var spinnerYMax = (canvasHeight - watermarkHeight);

    var spinnerX = $('#spinner_x').spinner({
      min: 0,
      max: spinnerXMax
    });
    var spinnerY = $('#spinner_y').spinner({
      min: 0,
      max: spinnerYMax
    });

    spinnerX
      .on('spin', function(event, ui) {
        var currentVal = ui.value;

        watermark.css({
          left: currentVal + 'px'
        });
      });
    spinnerY.on('spin', function(event, ui) {
      var currentVal = ui.value;

      watermark.css({
        top: currentVal + 'px'
      });
    });
  });
})();
