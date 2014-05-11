/*
    ArrowFoodAdmin
    Copyright © 2014 Ian Zachary Ledrick, also known as Thisita.
    
    This file is part of ArrowFoodAdmin.

    ArrowFoodAdmin is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    ArrowFoodAdmin is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with ArrowFoodAdmin.  If not, see <http://www.gnu.org/licenses/>.
*/
'use strict';

var request = require('request');

// Route handling function
function restaurantAdd(req, res) {
  // Render the jade add restaurant page
	res.render("restaurantAdd", {});
}

function restAdd(req, res) {
	var data = req.body;
	console.log(req.body.name);
	//console.log("name: " + data.name + ", address: " + data.address + ", email: " + data.email + ", phone: " + data.phone);
	//request({
	 // method: 'POST',
	  //uri: 'http://rest-arrow.herokuapp.com/restaurant',
	  //body: JSON.stringify({ name: data.name, addresses: [], emails: [], phones: [] })
	//},
	//function (error, response, body)
	//{
	//  res.send(response);
	//});
	res.send(200);
}

// Export the route association function
module.exports = function(app) {
  app.get('/restaurant/add', restaurantAdd);
  app.post('/restaurant/add', restAdd);
};