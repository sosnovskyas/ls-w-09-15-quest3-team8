(function () {

  var spinner_x = $('#spinner_x'),
      spinner_y = $('#spinner_y'),
      canvas_watermark = $('#canvas__watermark');

$('.position-blocks__link').on('click', function(e){
  e.preventDefault();
  var $this = $(this),
    position = $this.data('position'),
    canvas_container = $('#canvas__watermark-container'),
    canvas_width = canvas_container.width(),
    canvas_height = canvas_container.height(),
    middle_left = parseInt(canvas_width / 2),
    middle_top = parseInt(canvas_height / 2);



     //h_size = Math.floor(canvas_hor / 3),
    //v_size = Math.floor(canvas_ver / 3);

  /*var top_right = h_size + ((h_size / 0.9) - 6),
      centr = h_size + (h_size / 8.64),
      bottm = v_size + (v_size / 1.126),
      bottm_round = Math.floor(bottm);*/

  switch (position) {
    case 'top-left':
    canvas_watermark.css({
    'top': 0,
    'left': 0
  });
    spinner_x.val(0);
    spinner_y.val(0);
    break;
  case 'top-center':
    canvas_watermark.css({
    'top': 0,
    'left': middle_left
  });
    spinner_x.val(0);
    spinner_y.val(0);
    break;
  case 'top-right':
    canvas_watermark.css({
    'top': 0,
    'right': 0
  });
    spinner_x.val(0);
    spinner_y.val(0);
    break;
  case 'middle-left':
    canvas_watermark.css({
    'top': middle_top,
    'left': 0
  });
    spinner_x.val(0);
    spinner_y.val(0);
    break;
  case 'middle-center':
  canvas_watermark.css({
    'top': middle_top,
    'left': middle_left
  });
  spinner_x.val(0);
  spinner_y.val(0);
  break;
  case 'middle-right':
  canvas_watermark.css({
    'top': middle_top,
    'left': middle_left
  });
  spinner_x.val(0);
  spinner_y.val(0);
  break;
  case 'bottom-left':
  canvas_watermark.css({
    'bottom': 0,
    'left': 0
  });
  spinner_x.val(0);
  spinner_y.val(0);
  break;
  case 'bottom-center':
  canvas_watermark.css({
    'bottom': 0,
    'left': middle_left
  });
  spinner_x.val(0);
  spinner_y.val(0);
  break;
  case 'bottom-right':
  canvas_watermark.css({
    'bottom': 0,
    'right': 0
  });
  spinner_x.val(0);
  spinner_y.val(0);
  break;
}

});

$('.setting__form').on('reset', function(e){
  e.preventDefault();
  canvas_watermark.css({
    'top': 0,
    'left': 0
  }
  );
  spinner_x.val(0);
  spinner_y.val(0);
});

}());