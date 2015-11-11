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
  // Первое время будет порядочно консоль-логов, для проверки. Потом уберу!
  console.log(position + ' ' + canvas);
  console.log('');
  console.log(canvas_hor);
  console.log(canvas_ver);
  console.log('');
  console.log(h_size);
  console.log(v_size);
  var top_right = h_size + 234; // пока не понимаю как можно запрограммировать расчет 234
  console.log(top_right);
  switch (position) {
  case 'top-left':
    canvas_watermark.css({
    'top': 0,
    'left': 0
  }); break;
  case 'top-center':
    canvas_watermark.css({
    'top': 0,
    'left': h_size + 25
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
      'left': h_size + 25
  }); break;
  case 'middle-right':
  canvas_watermark.css({
      'top': v_size,
      'left': top_right
  }); break;
  case 'bottom-left':
    canvas_watermark.css({
    'top': v_size + 158,
    'left': 0
  }); break;
  case 'bottom-center':
  canvas_watermark.css({
  'top': v_size + 158,
  'left': h_size + 25
  }); break;
  case 'bottom-right':
  canvas_watermark.css({
  'top': v_size + 158,
  'left': top_right
  }); break;


  }


});
}());