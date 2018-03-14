// services.js
var jwt = require('jwt-simple');
var moment = require('moment');
var config = require('../../config');

exports.createToken = function(users) {
  var payload = {
    sub: users._id,
    iat: moment().unix(),
    exp: moment().add(1, "days").unix(),
  };
  return jwt.encode(payload, config.TOKEN_SECRET);
};