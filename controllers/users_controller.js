const User = require("../models/user");

module.exports.signUp = function (req, res) {
  if (req.isAuthenticated()) {
    return res.redirect("back");
  }
  return res.render("sign_up", {
    title: "sign Up",
  });
};

module.exports.signIn = function (req, res) {
  if (req.isAuthenticated()) {
    return res.redirect("back");
  }
  return res.render("sign_in", {
    title: "Sign In",
  });
};

module.exports.create = async function (req, res) {
  console.log("req.body", req.body);
  let user = await User.findOne({ email: req.body.email });

  if (req.body.password != req.body.confirm_password) {
    return res.redirect("back");
  }

  if (user) {
    return res.redirect("back");
  }

  await User.create(req.body);

  return res.redirect("/users/sign-in");
};

module.exports.createSession = function (req, res) {
  return res.redirect("/");
};

module.exports.destroySession = function (req, res) {
  req.logout();
  return res.redirect("/");
};
