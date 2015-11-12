(function () {
$('.position-blocks__link').on('click', function(e){
  e.preventDefault(); // убираем стандартную реакцию браузера на ссылки
  var $this = $(this), // ссылка по которой мы кликнули (то есть квадратик)
    position = $this.data('position'), // получаем информацию о положении из разметки

  // Для вывода координат в инпуты X и Y возьмем эти инпуты
    spinner_x = $('#spinner_x'),
    spinner_y = $('#spinner_y'),

  // Поработаем с картинками
    canvas_watermark = $('#canvas_watermark'), // возьмем вотермарк чтобы двигать его
    canvas = canvas_watermark.parent('#canvas'), // возьмем сам канвас для расчета ширины и высоты
    canvas_hor = canvas.width(), // по горизонтали 650
    canvas_ver = canvas.height(), // по вертикали 535
    h_size = Math.floor(canvas_hor / 3), // 216
    v_size = Math.floor(canvas_ver / 3); // 178

  // Дополнительные переменные для расчета координат
  var top_right = h_size + ((h_size / 0.9) - 6), // 450
      centr = h_size + (h_size / 8.64), // 241
      bottm = v_size + (v_size / 1.126), // 336.0817051509769
      bottm_round = Math.floor(bottm); // не выводим десятичные значения в инпут !!!

  // Правим CSS у вотермарка и вносим информацию в инпуты в зависимости от положения
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
    'left': centr
  });
    spinner_x.val(centr); // = left
    spinner_y.val(0); // = top
    break;
  case 'top-right':
    canvas_watermark.css({
    'top': 0,
    'left': top_right
  });
    spinner_x.val(top_right);
    spinner_y.val(0);
    break;
  case 'middle-left':
    canvas_watermark.css({
    'top': v_size,
    'left': 0
  });
    spinner_x.val(0);
    spinner_y.val(v_size);
    break;
  case 'middle-center':
  canvas_watermark.css({
    'top': v_size,
    'left': centr
  });
  spinner_x.val(centr);
  spinner_y.val(v_size);
  break;
  case 'middle-right':
  canvas_watermark.css({
    'top': v_size,
    'left': top_right
  });
  spinner_x.val(top_right);
  spinner_y.val(v_size);
  break;
  case 'bottom-left':

  canvas_watermark.css({
    'top': bottm,
    'left': 0
  });
  spinner_x.val(0);
  spinner_y.val(bottm_round);
  break;
  case 'bottom-center':
  canvas_watermark.css({
    'top': bottm,
    'left': centr
  });
  spinner_x.val(centr);
  spinner_y.val(bottm_round);
  break;
  case 'bottom-right':
  canvas_watermark.css({
    'top': bottm,
    'left': top_right
  });
  spinner_x.val(top_right);
  spinner_y.val(bottm_round);
  break;
}


});




}());