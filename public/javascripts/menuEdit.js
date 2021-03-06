$.ajax({
  dataType: "json",
  url: "http://rest-arrow.herokuapp.com/menus",
  success: function(data) {
    if(data){
      var restaurants =[];
      var menus = new Array();
      for(var i = 0; i < data.length; ++i){
        var rName = data[i].restaurant;
        var mName = data[i].name;
        if(menus[rName]){
          menus[rName].push(mName);
        } else {
          restaurants.push(rName);
          menus[rName] = new Array();
          menus[rName].push(mName);
        }
      }
      restaurantNames(restaurants, menus);
    } else{
      alert("Could not get data from the server.");
    }
  },
  error: function(jqXHR, textStatus, errorThrown) {
    alert('error ' + textStatus + " " + errorThrown);
  }
});

function restaurantNames(restaurants, menus){
  var select = $('#restaurantName');
  for(var i = 0; i < restaurants.length; ++i){
    select.append($('<option>', {
                    value: restaurants[i],
                    text : restaurants[i]
                }));
  }
  select.change(function() {
    menuNames(menus[select.val()]);
    setNewRestaurant(select.val());
  }).change();
}

function menuNames(menus){
  var select = $('#menuName');
  select.html('');
  for(var i = 0; i < menus.length; ++i){
    select.append($('<option>', {
                    value: menus[i],
                    text : menus[i]
                }));
  }
  select.change(function() {
    setNewMenu(select.val());
  }).change();
}
function setNewRestaurant(name){
  var input = $('#nrestaurant');
  input.val( name);
}
function setNewMenu(name){
  var input = $('#nname');
  input.val( name);
}