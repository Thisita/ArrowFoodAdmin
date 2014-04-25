$.ajax({
  dataType: "json",
  url: "http://rest.arrow.thisita.net/menus",
  success: function(data) {
    if(data){
      var restaurants =[];
      var menus = new Array();
      var items = {};
      for(var i = 0; i < data.length; ++i){
        var rName = data[i].restaurant;
        var mName = data[i].name;
        var iName = data[i].items;
        if(menus[rName]){
          menus[rName].push(mName);
          items[mName] = iName;
        } else {
          restaurants.push(rName);
          menus[rName] = new Array();
          menus[rName].push(mName);
          items[mName] = iName;
        }
      }
      restaurantNames(restaurants, menus, items);
    } else{
      alert("Could not get data from the server.");
    }
  },
  error: function(jqXHR, textStatus, errorThrown) {
    alert('error ' + textStatus + " " + errorThrown);
  }
});

function restaurantNames(restaurants, menus, items){
  var select = $('#restaurantName');
  for(var i = 0; i < restaurants.length; ++i){
    select.append($('<option>', {
                    value: restaurants[i],
                    text : restaurants[i]
                }));
  }
  select.change(function() {
    menuNames(menus[select.val()], items);
  }).change();
}

function menuNames(menus, items){
  var select = $('#menuName');
  select.html('');
  for(var i = 0; i < menus.length; ++i){
    select.append($('<option>', {
                    value: menus[i],
                    text : menus[i]
                }));
  }
  select.change(function() {
    menuItemNames(items[select.val()]);
  }).change();
}

function menuItemNames(items){
  var select = $('#menuItemName');
  select.html('');
  for(var i = 0; i < items.length; ++i){
    select.append($('<option>', {
                    value: items[i].name,
                    text : items[i].name
                }));
  }
}