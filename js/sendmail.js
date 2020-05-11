function onSuccess(form) {

  $('#send-button').html("enviando...<i class='fas fa-spinner fa-spin'></i>");
  emailjs.sendForm('volare', 'volare', form).then(
    function () {
      $("#successmsg").addClass("show");
      $('#send-button').html('¡Listo!');
      $('#send-button').prop('disabled', true);
    },
    function (error) {
      alert('Hubo un error al enviar el mail. Inténtalo nuevamente.');
      console.log("FAILED. error=", error);
    });
  return false;
}
