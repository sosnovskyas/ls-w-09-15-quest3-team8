;
var positionCoordsModule = function() {
  'use strict';

    // watermark parametrs
    var watermark = $('.js-canvas__watermark');
    var watermarkWidth = parseInt(watermark.css('width'));
    var watermarkHeight = parseInt(watermark.css('height'));

    console.log(watermark.css('width'));
    // canvas parametrs
    var canvas = $('#canvas__img');
    var canvasWidth = parseInt(canvas.css('width'));
    var canvasHeight = parseInt(canvas.css('height'));

    // spinner's parametrs

    var spinnerX = $('#spinner_x').spinner({
      min: 0,
      max: spinnerXMax
    });
    var spinnerY = $('#spinner_y').spinner({
      min: 0,
      max: spinnerYMax
    });

    var xLine = $('#watermark__vertical-margin');
    var yLine = $('#watermark__horizontal-margin');

    spinnerX
      .on('spin', function(event, ui) {
        var currentVal = ui.value;

        if(tilingMode){
          xLine.css({
            'width': currentVal + 'px',
            'margin-left': (currentVal/-2) + 'px'
          });
          $('.js-canvas__watermark').css({
            'margin-right': currentVal + 'px'
          })
        } else {
          watermark.css({
            left: currentVal + 'px'
          });
        }
      });
    spinnerY.on('spin', function(event, ui) {
      var currentVal = ui.value;

      if(tilingMode){
        yLine.css({
          'height': currentVal + 'px',
          'margin-top': (currentVal/-2) + 'px'
        });
        $('.js-canvas__watermark').css({
          'margin-bottom': currentVal + 'px'
        })

      } else {
        watermark.css({
          top: currentVal + 'px'
        });
      }
    });
};
