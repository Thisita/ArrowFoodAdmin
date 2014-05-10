
$.ajax({
  dataType: "json",
  url: "http://rest-arrow.herokuapp.com//restaurants",
  success: function(data) {
    if(data){
      var names =[];
      var addresses ={};
      var emails ={};
      var phones ={};
      for(var i = 0; i < data.length; ++i){
        names.push(data[i].name);
        addresses[data[i].name] = data[i].addresses;
        emails[data[i].name]=data[i].emails;
        phones[data[i].name]=data[i].phones;
      }
      restaurantNames(names, addresses,emails,phones);
    } else{
      alert("Could not get data from the server.");
    }
  },
  error: function(jqXHR, textStatus, errorThrown) {
    alert('error ' + textStatus + " " + errorThrown);
  }
});

function restaurantNames(names, addresses,emails,phones){
  var select = $('#restaurantName');
  for(var i = 0; i < names.length; ++i){
    select.append($('<option>', {
                    value: names[i],
                    text : names[i]
                }));
  }
  select.change(function() {
    restaurantAddresses(addresses[select.val()],phones[select.val()],emails[select.val()]);
    setNewName(select.val());
  }).change();
}

function restaurantAddresses(addresses,phones,emails){
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
        setNewAddress(addresses[select[0].selectedIndex]);
        setNewPhone(phones[select[0].selectedIndex]);
        setNewEmail(emails[select[0].selectedIndex]);
  }).change();
}
function setNewName(name){
  var input = $('#nname');
  input.val( name);
}
function setNewAddress(address){
  var nan = $('#nan'); //new address name
  nan.val( address.name);
  var naddress = $('#naddress'); //new address
  naddress.val( address.line1);
  var nac = $('#nac'); //new address city
  nac.val( address.city);
  var nas = $('#nas'); //new address name
  nas.val( address.state);
  var nzip = $('#nzip'); //new address name
  nzip.val( address.zip);
}
function setNewPhone(phone){
  var input = $('#phone');
  input.val( phone.number);
}function setNewEmail(email){
  var input = $('#email');
  input.val( email.address);
}