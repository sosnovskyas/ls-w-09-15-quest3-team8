var canvasWidth = 650;
var canvasHeight = 535;

var backgroundWidth = 0;
var backgroundHeight = 0;
var backgroundScale = 1;

var watermarkWidth = 0;
var watermarkHeight = 0;
var watermarkScale = 1;

var bgFile = new FileReader();
var bgImage = new Image();

var wmFile = new FileReader();
var wmImage = new Image();

// совсем немножко чудо математики ;)
function returnScale(w1,h1,w2,h2){
  var s1 = w2/h2;
  var s2 = w1/h1;
  var w = 0;
  var h = 0;

  if(s1 > s2){
      w = w1;
      h =(w1*h2/w2);
  } else if(s1 < s2) {
      w = (h1*w2/h2);
      h = h1;
  } else if(s1 == s2) {
    w = w1;
    h = h1;
  }
  return {
    w: Math.floor(w),
    h: Math.floor(h),
    s: s2/s1
  }
}

function getBgFile(input) {
  if (input.files && input.files[0]) {

    bgFile.onload = function (e) {
      bgImage.src = bgFile.result;
      $('.upload-image__fake-input').val(input.files[0].name);

      bgImage.onload = function() {
        if((bgImage.width > canvasWidth)||(bgImage.height > canvasHeight)){
          // если фоновая картинка больше канвы - масштабируем
          bg = returnScale(canvasWidth, canvasHeight, bgImage.width, bgImage.height);
          backgroundWidth = bg.w;
          backgroundHeight = bg.h;
          backgroundScale = bg.s;

          console.log('фон больше канвы ',backgroundScale);

        } else {
          // если меньше канвы оставляем всё как есть
          backgroundWidth = bgImage.width;
          backgroundHeight = bgImage.height;

          console.log('фон меньше канвы ',backgroundScale);

        }

        $('#canvas__img')
          .attr('src', e.target.result)
          .width(backgroundWidth)
          .height(backgroundHeight)
        ;
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
        if((backgroundScale < 1) && ((wmImage.width*backgroundScale > backgroundWidth)||(wmImage.height*backgroundScale >backgroundHeight))){
          // если фоновая картинка уменьшалась И!!! смасштабированный ватермарк больше уменьшенного фона
          console.log(backgroundScale);
          wm = returnScale(backgroundWidth, backgroundHeight, wmImage.width*backgroundScale, wmImage.height*backgroundScale);
          watermarkWidth = wm.w;
          watermarkHeight = wm.h;
          watermarkScale = wm.s;

          console.log('фон уменьшался, ватермарк НЕ ВМЕЩАЕТСЯ',backgroundScale);

        } else if(backgroundScale < 1){
          // если фон масштабировался НО!!! ватермарк не больше фона как было выше
          // уменьшаем размер ватермарка на коэффициент
          watermarkWidth = wmImage.width*backgroundScale;
          watermarkHeight = wmImage.height*backgroundScale;

          console.log('фон уменьшался, ватермарк вмещается',watermarkScale, 'и масштабируется к фону', backgroundScale);

        } else if((backgroundWidth < wmImage.width)||(backgroundHeight < wmImage.height )){
          // если фон не масштабировался и ватермарк больше фона - масштабируем
          wm = returnScale(backgroundWidth, backgroundHeight, wmImage.width, wmImage.height);
          watermarkWidth = wm.w;
          watermarkHeight = wm.h;
          watermarkScale = wm.s;

          console.log('фон не масштабировался',backgroundScale ,' ватермарк БОЛЬШЕ ФОНА ',watermarkScale);

        } else {
          //
          watermarkWidth = wmImage.width;
          watermarkHeight = wmImage.height;

          console.log('фон не масштабировался',backgroundScale ,' ватермарк не масштабировался ',watermarkScale);

        }

        $('#canvas__watermark')
          .attr('src', e.target.result)
          .width(watermarkWidth)
          .height(watermarkHeight)
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