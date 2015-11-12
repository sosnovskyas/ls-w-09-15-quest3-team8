(function () {
$('.position-blocks__link').on('click', function(e){
  e.preventDefault();
  var $this = $(this),
  position = $this.data('position'),
  canvas_watermark = $('#canvas_watermark'),
  canvas = canvas_watermark.parent('#canvas'),
  canvas_hor = canvas.width(), // по горизонтали 650
  canvas_ver = canvas.height(), // по вертикали 535
  h_size = Math.floor(canvas_hor / 3), // 216
  v_size = Math.floor(canvas_ver / 3); // 178
  // СДВИГАЕМ
  var top_right = h_size + (h_size / 0.9), // 456
      centr = h_size + 25,
      bottm = v_size + 158; // пока не понимаю как можно запрограммировать расчет этих коэфф


  switch (position) {
  case 'top-left':
    canvas_watermark.css({
    'top': 0,
    'left': 0
  }); break;
  case 'top-center':
    canvas_watermark.css({
    'top': 0,
    'left': centr
  }); break;
  case 'top-right':
    canvas_watermark.css({
    'top': 0,
    'left': top_right
  }); break;
  case 'middle-left':
    canvas_watermark.css({
    'top': v_size,
    'left': 0
  }); break;
  case 'middle-center':
  canvas_watermark.css({
    'top': v_size,
    'left': centr
  }); break;
  case 'middle-right':
  canvas_watermark.css({
    'top': v_size,
    'left': top_right
  }); break;
  case 'bottom-left':
  canvas_watermark.css({
    'top': bottm,
    'left': 0
  }); break;
  case 'bottom-center':
  canvas_watermark.css({
    'top': bottm,
    'left': centr
  }); break;
  case 'bottom-right':
  canvas_watermark.css({
    'top': bottm,
    'left': top_right
  }); break;
}


});
}());