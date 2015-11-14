var canvasWidth = 650;
var canvasHeight = 535;

var bgFile = new FileReader();
var wmFile = new FileReader();
var bgImage = new Image();
var wmImage = new Image();


function getBgFile(input) {
  if (input.files && input.files[0]) {

    bgFile.onload = function (e) {
      bgImage.src = bgFile.result;
      $('.upload-image__fake-input').val(input.files[0].name);

      bgImage.onload = function() {
        $('#canvas__img')
          .attr('src', e.target.result)
          .width(bgImage.width)
          .height(bgImage.height)
          .css({
            top:0,
            left: 0
          });
      };
    };
    bgFile.readAsDataURL(input.files[0]);
  }
}

function getWatermarkFile(input) {
  if (input.files && input.files[0]) {

    wmFile.onload = function (e) {
      wmImage.src = wmFile.result;
      $('.upload-watermark__fake-input').val(input.files[0].name);

      wmImage.onload = function() {
        $('#canvas__watermark')
          .attr('src', e.target.result)
          .width(wmImage.width)
          .height(wmImage.height)
          .css({
            top:0,
            left: 0
          });
      };
    };
    wmFile.readAsDataURL(input.files[0]);
  }
}

function downloadResult(e){
  e.preventDefault();
  console.log('helo');
}