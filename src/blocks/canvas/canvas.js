;
var watermark = {
  x: 0,
  y: 0
};

Object.observe(watermark, function(changes) {
  var _watermark = $('#canvas_watermark');
  _watermark.css({
    left: watermark.x + 'px',
    top: watermark.y + 'px'
  });
  console.log(changes);
  changes.forEach(function(change) {
    if(change.name === 'x'){
      _watermark.css({
        left: watermark.x + 'px'
      });
    } else if(change.name === 'y'){
      _watermark.css({
        top: watermark.y + 'px'
      });
    }
  })
});