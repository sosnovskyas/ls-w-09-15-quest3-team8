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
    canvas_width = canvas_container.width(), // 650
    canvas_height = canvas_container.height(), // 433
    middle_left = parseInt(canvas_width / 2),
    middle_top = parseInt(canvas_height / 2);


    canvas_container.css('position', 'absolute');



  switch (position) {
    case 'top-left':
    canvas_watermark.css({
    'top': 0,  // y
    'left': 0 // x
  });
    // Как бы их программно посчитать
    spinner_x.val(0);
    spinner_y.val(0);
    break;
  case 'top-center':
    canvas_watermark.css({
    'top': 0,
    'left': 225 + 'px'
  });
    spinner_x.val(225);
    spinner_y.val(0);
    break;
  case 'top-right':
    canvas_watermark.css({
    'top': 0,
    'left': 450 + 'px'
  });
    spinner_x.val(450);
    spinner_y.val(0);
    break;
  case 'middle-left':
    canvas_watermark.css({
    'top': 116 + 'px',
    'left': 0
  });
    spinner_x.val(0);
    spinner_y.val(116);
    break;
  case 'middle-center':
  canvas_watermark.css({
    'top': 116 + 'px',
    'left':225 + 'px'
  });
  spinner_x.val(225);
  spinner_y.val(116);
  break;
  case 'middle-right':
  canvas_watermark.css({
    'top': 116 + 'px',
    'left': 450 + 'px'
  });
  spinner_x.val(450);
  spinner_y.val(116);
  break;
  case 'bottom-left':
  canvas_watermark.css({
    'top': 233 + 'px',
    'left': 0
  });
  spinner_x.val(0);
  spinner_y.val(233);
  break;
  case 'bottom-center':
  canvas_watermark.css({
    'top': 233 + 'px',
    'left': 225 + 'px'
  });
  spinner_x.val(225);
  spinner_y.val(233);
  break;
  case 'bottom-right':
  canvas_watermark.css({
    'top': 233 + 'px',
    'left': 450 + 'px'
  });
  spinner_x.val(450);
  spinner_y.val(233);
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
  opacity_input.val(100); // для 100% сброса всех значений!
  ui_slider_range.css('width', '100%');
  ui_slider_handle.css('left', '100%');
});

}());