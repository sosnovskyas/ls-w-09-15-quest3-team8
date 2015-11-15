var blocksModule = (function () {

  var init = function () {
    _setUpListeners();
  };

  var _setUpListeners = function () {
    $('.position-blocks__link').on('click', _blocksChange);
    $('.setting__form').on('reset', _resetEverything);
  };

  var spinner_x = $('#spinner_x'),
      spinner_y = $('#spinner_y'),
      opacity_input = $('#opacity__input'),
      canvas = $('#canvas'),
      canvas_container = $('#canvas__watermark-container'),
      ui_slider_range = $('.ui-slider-range'),
      ui_slider_handle = $('.ui-slider-handle'),
      canvas_watermark = $('#canvas__watermark');


  var _blocksChange = function (e) {
    e.preventDefault();
    var $this = $(this),
        position = $this.data('position'),
        canvas_width = canvas.width(),
        canvas_container_height = canvas_container.height(),
        canvas_watermark_width = canvas_watermark.width(),
        canvas_watermark_height = canvas_watermark.height();


    var x_edge = parseInt(canvas_width - canvas_watermark_width),
        x_half = x_edge / 2,
        y_edge = parseInt(canvas_container_height - canvas_watermark_height),
        y_half = Math.floor(y_edge / 2);

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
  };

  var _resetEverything = function(e){
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
  }

  return {
    init: init
  };

})();

blocksModule.init();