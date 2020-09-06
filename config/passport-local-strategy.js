const passport = require("passport");

const LocalStrategy = require("passport-local").Strategy;

const User = require("../models/user");

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },
    function (email, password, done) {
      User.findOne({ email: email }, function (err, user) {
        if (err) {
          return done(err);
        }
        if (!user || user.password != password) {
          return done(null, false);
        }

        return done(null, user);
      });
    }
  )
);

// used to serialize the user for the session
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

// used to deserialize the user
passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

passport.checkAuthentication = function (req, res, next) {
  if (!req.isAuthenticated) {
    return res.redirect("/users/sign-in");
  }

  next();
};

passport.setAuthenticatedUser = function (req, res, next) {
  if (req.isAuthenticated) {
    res.locals.user = req.user;
  }

  next();
};
