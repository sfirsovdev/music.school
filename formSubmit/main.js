"use strict";

(function ($) {
  /**
   * ajax send form
   */

  // select form
  var $formMail = $('.form');
  $formMail.on('submit', function (event) {
    event.preventDefault();
    var $this = $(this);

    // select filled data
    var $name = $this.find('[name="name"]').val(),
        $phone = $this.find('[name="phone"]').val(),

    $.ajax({
      type: "POST",
      url: "ajax/form_cpc.php",
      data: {
        contact_name: $nameVal,
        contact_tel: $phoneVal
      },
      success: function success(data) {
        // reset form
        $this.get(0).reset();
        // open thanks
      },
      error: function error(response) {
        // show error alert
        alert("Ошибка отправки");
      }
    });
  });
})(jQuery);