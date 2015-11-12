
$(document).ready(function() {
  $(function() {
    $("#opacity__slider").slider({
      orientation: "horizontal",
      range: "min",
      min: 0,
      max: 100,
      value: 100,
      slide: function(event, ui) {
        var opacity_val = (ui.value) / 100;

        $("#canvas_watermark").css({
          opacity: opacity_val
        })
      }
    });
    $("#amount").val($("#slider").slider("value"));
  });

});
