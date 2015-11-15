(function () {

  var spinner_x = $('#spinner_x'),
      spinner_y = $('#spinner_y'),
      opacity_input = $('#opacity__input'), // значение опасити 100
      ui_slider_range = $('.ui-slider-range'), // полоска на ползунке
      ui_slider_handle = $('.ui-slider-handle'), // ручка у ползунка
      canvas_watermark = $('#canvas__watermark');

$('.position-blocks__link').on('click', function(e){
  e.preventDefault();
  var $this = $(this),
    position = $this.data('position'),
    canvas_container = $('#canvas__watermark-container'),
    canvas_width = (canvas_container.width() - 51), // 650
    canvas_height = canvas_container.height(); // 433

  console.log(canvas_height - 51);

    canvas_container.css('position', 'absolute');

  // Как бы края х и у программно посчитать

    var x_edge = 450,
        x_half = x_edge / 2, // 225
        y_edge = 233,
        y_half = Math.floor(y_edge / 2); // 116

  switch (position) {
    case 'top-left':
    canvas_watermark.css({
    'top': 0,  // y
    'left': 0 // x
  });
     spinner_x.val(0);
    spinner_y.val(0);
    break;
  case 'top-center':
    canvas_watermark.css({
    'top': 0,
    'left': x_half
  });
    spinner_x.val(x_half);
    spinner_y.val(0);
    break;
  case 'top-right':
    canvas_watermark.css({
    'top': 0,
    'left': x_edge
  });
    spinner_x.val(x_edge);
    spinner_y.val(0);
    break;
  case 'middle-left':
    canvas_watermark.css({
    'top': y_half,
    'left': 0
  });
    spinner_x.val(0);
    spinner_y.val(y_half);
    break;
  case 'middle-center':
  canvas_watermark.css({
    'top': y_half,
    'left':x_half
  });
  spinner_x.val(x_half);
  spinner_y.val(y_half);
  break;
  case 'middle-right':
  canvas_watermark.css({
    'top': y_half,
    'left': x_edge
  });
  spinner_x.val(x_edge);
  spinner_y.val(y_half);
  break;
  case 'bottom-left':
  canvas_watermark.css({
    'top': y_edge,
    'left': 0
  });
  spinner_x.val(0);
  spinner_y.val(y_edge);
  break;
  case 'bottom-center':
  canvas_watermark.css({
    'top': y_edge,
    'left': x_half
  });
  spinner_x.val(x_half);
  spinner_y.val(y_edge);
  break;
  case 'bottom-right':
  canvas_watermark.css({
    'top': y_edge,
    'left': x_edge
  });
  spinner_x.val(x_edge);
  spinner_y.val(y_edge);
  break;
}

});

$('.setting__form').on('reset', function(e){
  e.preventDefault();
  canvas_watermark.css({
    'top': 0,
    'left': 0,
    'opacity': 1
  }
  );
  spinner_x.val(0);
  spinner_y.val(0);
  opacity_input.val(100);
  ui_slider_range.css('width', '100%');
  ui_slider_handle.css('left', '100%');
});

}());