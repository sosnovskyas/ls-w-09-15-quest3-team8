
$('.setting__form')
  .attr('disabled', '')
  .on('submit', function(e) {
    e.preventDefault();
    var _data = $(this).serialize();
    console.log( _data);

    $.ajax({
      type: 'POST',
      url: 'watermark.php',
      data: _data,
      success: function(data) {
        console.log(data);
        $.fileDownload(data);
      },
      error:  function(xhr, str){
        console.log('Возникла ошибка: ' + xhr.responseCode);
      },
      always: function() {
        $(submitButton).removeAttr('disabled');
      }
    });
  });