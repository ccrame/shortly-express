var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
var Link = require('./link');

var User = db.Model.extend({
  tableName: 'users',

  urls: function(){
    return this.hasMany(Link);
  },
  // On initialize
    // Hash the password input and store it in db (on Model as well?)
  initialize: function(){
    //console.log('User created', this.username, this.attributes.password);
    var context = this;
    bcrypt.hash(this.get('password'), null, null, function(err, hash) {
      // console.log('Current context of model is: ', );
      context.set('password',hash);
    });
  }
});

module.exports = User;


// var bcrypt = require('bcrypt');
// bcrypt.genSalt(10, function(err, salt) {
//     bcrypt.hash('B4c0/\/', salt, function(err, hash) {
//         // Store hash in your password DB.
//     });
// });