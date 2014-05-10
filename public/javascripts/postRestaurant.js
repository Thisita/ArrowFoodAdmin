$("form").submit(function(event)
{
  // stop form from submitting normally
  event.preventDefault();
  
  var $form = $(this), 
    restaurantName = $form.attr("input[name='name']").val(),
	restaurantAddress = $form.attr("input[name='address]").val(),
	restaurantEmail = $form.attr("input[name='email']").val(),
	restaurantPhone = $form.attr("input[name='phone']").val(),
    url = $form.attr("action");
  
  $.post(url, { name: restaurantName, addresses: [ name: "default", line1: restaurantAddress, line2: null, city: "Louisville", state: "KY", zip: "40203" ], emails: [ name: "default", address: restaurantEmail ], phones: [ name: "default", number: restaurantPhone ] });
});