const User = require("./models/User");
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
// const ExtractJWT = passportJWT.ExtractJwt;

function initialize(passport) {
  passport.use(
    "jwt",
    new JWTStrategy(
      {
        jwtFromRequest: (req) => {
          return req.cookies["jwt"];
        },
        secretOrKey: process.env.JWT_SECRET,
      },
      (jwtPayload, done) => {
        return User.findById(jwtPayload.sub)
          .select("_id firstname username email accountBalance")
          .then((user) => {
            return done(null, user);
          })
          .catch((err) => {
            return done(err);
          });
      }
    )
  );
}

module.exports = initialize;
