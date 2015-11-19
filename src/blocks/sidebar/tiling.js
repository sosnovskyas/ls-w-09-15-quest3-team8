var tilingMode = false;
var wSmeschenie = 0;
var hSmeschenie = 0;

$(document).ready(function () {
  var items = $('.switch-mode__item');
  var _createTiling = function (){
    var
      clone = null,
      inputX = $('#spinner_x'),
      inputY = $('#spinner_y'),
      element = $('.canvas__watermark'),
      wrapper = $('.js-canvas__watermark-container'),
      wrapperWidth = wrapper.width(),
      wrapperHeight = wrapper.height(),
      watermarkWidth = element.width(),
      watermarkHeight = element.height();

    console.log(wrapperWidth);
    var countX = Math.round(wrapperWidth / watermarkWidth);
    var countY = Math.round(wrapperHeight / watermarkHeight);

    wrapper.width(wrapper.width() * 2);
    wrapper.height(wrapper.height() * 2);

    for (var i = 0, l = countY * countX * 3; i < l; i++) {
      clone = element.clone();
      wrapper.append(clone);
    }

    wrapper.draggable({
      drag: function(){
        var position = $(this).position();
        var posX = position.left;
        var posY = position.top;
        wSmeschenie = posX;
        hSmeschenie = posY;
      }
    });
    //Сбрасываем позишен контейнера вотермарков
    wrapper.css({
      'left': 0,
      'top': 0
    });
    element.css({
      'left': 0,
      'top': 0,
      'margin-right': 0,
      'margin-bottom': 0

    });
  };

  $('.switch-mode__link').on('click', function (e) {
    e.preventDefault();

    var item = $(this).closest('.switch-mode__item');
    var block = $(this).closest('.settings__position');
    if (!item.hasClass('active')){
      items.removeClass('active');
      item.addClass('active');
      if (item.hasClass('tiling-mode')){
        //$('.position__header').text('Отступы');
        block.addClass('tiling-mode');
        tilingMode = true;
        _createTiling();
        $('.js-canvas__watermark').css({
          position: 'static'
        });
        $('.js-canvas__watermark:first').addClass('first-watermark')
        $('#spinner_x').val(0);
        $('#spinner_y').val(0);

      } else {
        //$('.position__header').text('Положение');
        block.removeClass('tiling-mode');
        tilingMode = false;
        $('.js-canvas__watermark:not(.first-watermark)').remove();
        $('.first-watermark')
          .removeClass('first-watermark')
          .css({
            position: 'absolute'

          });
        $('.js-canvas__watermark-container')
          .css({
            'top': 0,
            'left': 0,
            'width': 1600 + 'px'
          });
        $('#spinner_x').val(0);
        $('#spinner_y').val(0);

      }
    }
  })
});