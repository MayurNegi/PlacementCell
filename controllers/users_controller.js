const User = require("../models/user");

module.exports.signUp = function (req, res) {
  return res.render("sign_up");
};

module.exports.signIn = function (req, res) {
  return res.render("sign_in");
};
