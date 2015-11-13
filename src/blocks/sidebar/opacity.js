var opacityModule = (function(){
  var init = function(){
    _setUpListners();
  };

  var _setUpListners = function(){
    _changeOpacity();
  };

  var opacitySlider = $('#opacity__slider'),
      canvas = $('#canvas__watermark'),
      opacityInput = $('#opacity__input');


  var _changeOpacity = function(){
    opacitySlider.slider({
      range: "min",
      min: 0,
      max: 100,
      value: 100,
      step: 0.05,
      slide: function (event, ui) {
        var opacity_val = (ui.value)/100;

        canvas.css('opacity', opacity_val);
        opacityInput.val(ui.value);
      }
    });
  };

  return {
    init: init
  };
})();
opacityModule.init();
