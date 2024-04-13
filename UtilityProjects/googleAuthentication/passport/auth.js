const passport = require('passport');

const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

const authUser=(request, accessToken, refreshToken, profile, done)=> {
    return done(null,profile)
  }

passport.use(new GoogleStrategy({
    clientID:     '124440351065-olf9006915jk0cgsqkq03c1b3qti0uf7.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: "http://localhost:5000/google/callback",
    passReqToCallback   : true
  },authUser
));


passport.serializeUser((user,done)=>{
  // The USER object is the "authenticated user" from the done() in authUser function.
  // serializeUser() will attach this user to "req.session.passport.user.{user}", so that it is tied to the session object for each session.
    done(null,user)
})
passport.deserializeUser((user,done)=>{
  // This is the {user} that was saved in req.session.passport.user.{user} in the serializationUser()
  // deserializeUser will attach this {user} to the "req.user.{user}", so that it can be used anywhere in the App
    done(null,user)
})
//Used to deserialize user out of session i.e req.session ke andar jo user object hai usko req.user ke andar pass kar deta hai