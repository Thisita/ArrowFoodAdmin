$("#restaurantAddForm").submit(function(event)
{
  console.log("I AM BEING CALLED. YOU ARE NOT CRAZY.");
  // stop form from submitting normally
  event.preventDefault();
  
  var $form = $(this), 
    restaurantName = $form.find("input[name='name']").val(),
    restaurantAddress = $form.find("input[name='address']").val(),
    restaurantEmail = $form.find("input[name='email']").val(),
    restaurantPhone = $form.find("input[name='phone']").val(),
    url = $form.attr("action");
  
  $.post(url, { name: restaurantName, addresses: [ name: "default", line1: restaurantAddress, line2: null, city: "Louisville", state: "KY", zip: "40203" ], emails: [ name: "default", address: restaurantEmail ], phones: [ name: "default", number: restaurantPhone ] });
});