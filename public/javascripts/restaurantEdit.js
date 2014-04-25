$.ajax({
  dataType: "json",
  url: "http://rest.arrow.thisita.net/restaurants",
  success: function(data) {
    if(data){
      var names =[];
      var addresses ={};
      for(var i = 0; i < data.length; ++i){
        names.push(data[i].name);
        addresses[data[i].name] = data[i].addresses;
      }
      restaurantNames(names, addresses);
    } else{
      alert("Could not get data from the server.");
    }
  },
  error: function(jqXHR, textStatus, errorThrown) {
    alert('error ' + textStatus + " " + errorThrown);
  }
});

function restaurantNames(names, addresses){
  var select = $('#restaurantName');
  for(var i = 0; i < names.length; ++i){
    select.append($('<option>', {
                    value: names[i],
                    text : names[i]
                }));
  }
  select.change(function() {
    restaurantAddresses(addresses[select.val()]);
    setNewName(select.val());
  }).change();
}

function restaurantAddresses(addresses){
  var select = $('#restaurantAddress');
  select.html('');
  for(var i = 0; i < addresses.length; ++i){
    var text = addresses[i].name + ": " + addresses[i].line1 + " " + addresses[i].city + " " + addresses[i].state + " " + addresses[i].zip;
    select.append($('<option>', {
                    value: addresses[i].name,
                    text : text
                }));
  }
  select.change(function(){
  //  setNewAddress(select.val());
  }).change();
}
function setNewName(name){
  var input = $('#nname');
  input.val( name);
}
//function setNewAddress(address){
 // var input = $('#naddress');
  //input.val(address);
//}