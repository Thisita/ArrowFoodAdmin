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

module.exports = function(app, express) {
  var MongoStore = require('connect-mongo')(express);
  // global config
  app.configure(function() {
    app.use(express.logger());
    // session
    app.use(express.cookieParser());
    app.use(express.session({
      secret: 'random_data',
      maxAge: new Date(Date.now() + 3600000),
      store: new MongoStore({
        db: 'express-sessions',
        host: 'localhost',
        port: 10072,
        username: 'admin',
        password: 'admin'
      })
    }));
    // routing
    app.use(app.router);
    // Middleware for HTML serving
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'jade');
    app.use(require('stylus').middleware(path.join(__dirname, 'public')));
    app.use(express.static(path.join(__dirname, 'public')));
  });
  
  // dev config
  app.configure('development', function() {
    app.use(express.errorHandler({
      dumpExceptions: true,
      showStack: true
    }));
  });
  
  // prod config
  app.configure('production', function() {
    app.use(express.errorHandler());
  });
};