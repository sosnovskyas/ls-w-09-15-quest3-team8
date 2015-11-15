
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
        $('.results').html(data);
      },
      error:  function(xhr, str){
        console.log('Возникла ошибка: ' + xhr.responseCode);
      },
      always: function() {
        $(submitButton).removeAttr('disabled');
      }
    });
  });

/*

  //event.preventDefault();
  var submitButton = $(this).find('input[type="submit"]');
  $(submitButton).attr('disabled', '');
  var
    form   = $(this),
    url    = 'watermark.php',
    data   = form.serialize(),
    result = $.ajax({
      url: url,
      type: 'POST',
      dataType: 'json',
      data: data
    })
      .done(function() {
        console.log("sucsess");
        openSucsessPopup();
        resetForm();
      })
      .fail(function() {
        console.log("error");
        openFailPopup();
      })
      .always(function() {
        $(submitButton).removeAttr('disabled');
      });*/
