;(function() {
  'use strict';
  $(document).ready(function() {
    // watermark parametrs
    var _watermark = $('#canvas_watermark');
    var _watermarkWidth = parseInt(_watermark.css('width'));
    var _watermarkHeight = parseInt(_watermark.css('height'));

    // canvas parametrs
    var canvas = $('#canvas_img');
    var canvasWidth = parseInt(canvas.css('width'));
    var canvasHeight = parseInt(canvas.css('height'));

     //spinner's parametrs
    var spinnerXMax = 200;// (canvasWidth - _watermarkWidth);
    var spinnerYMax = 200;// (canvasHeight - _watermarkHeight);

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
        watermark.x = ui.value;
      })
      .on('input', function(e) {
        watermark.x = e.currentTarget.value;
      })
    ;
    spinnerY
      .on('spin', function(event, ui) {
        watermark.y = ui.value;
      })
      .on('input', function(e) {
        watermark.x = e.currentTarget.value;
      })
    ;
  });
})();
