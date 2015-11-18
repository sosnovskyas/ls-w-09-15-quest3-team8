
$('.setting__form')
  .attr('disabled', '')
  .on('submit', function(e) {
    e.preventDefault();
    var _data = $(this).serialize();

    $.ajax({
      type: 'POST',
      url: 'upload.php',
      data: _data,
      success: function(data,e,q,w) {
        console.log('1',data,'2', e,'q', q,'w',w)
      },
      error:  function(xhr, str){
        console.log('Возникла ошибка: ' + xhr.responseCode);
      },
      always: function() {
        $(submitButton).removeAttr('disabled');
      }
    });
  });