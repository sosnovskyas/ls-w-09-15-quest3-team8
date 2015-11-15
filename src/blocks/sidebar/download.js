var downloadResult = function(event) {

  //event.preventDefault();
  var submitButton = $(this).find('input[type="submit"]');
  $(submitButton).attr('disabled', '');
  var
    form   = $(this),
    url    = form.attr('action'),
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
      });
};